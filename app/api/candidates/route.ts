import { NextRequest, NextResponse } from 'next/server'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'

interface CandidateData {
  name: string
  email: string
  mobile: string
}

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is properly configured
    if (!isSupabaseConfigured()) {
      console.error('Supabase is not properly configured')
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      
      return NextResponse.json(
        { 
          error: 'Server configuration error. Please contact support.',
          details: !supabaseUrl || !supabaseAnonKey 
            ? 'Supabase environment variables are missing. Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel.'
            : 'Supabase credentials are invalid or not properly configured.'
        },
        { status: 500 }
      )
    }

    const body: CandidateData = await request.json()
    const { name, email, mobile } = body

    // Validate required fields
    if (!name || !email || !mobile) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate mobile format (basic validation)
    const mobileDigits = mobile.replace(/[^0-9]/g, '')
    if (mobileDigits.length < 10) {
      return NextResponse.json(
        { error: 'Invalid mobile number' },
        { status: 400 }
      )
    }

    // Check for duplicate email
    const { data: existingCandidate, error: checkError } = await supabase
      .from('candidates')
      .select('email')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle()

    if (checkError) {
      console.error('Supabase check error:', checkError)
      // If it's a table not found error, provide helpful message
      if (checkError.code === 'PGRST116' || checkError.message?.includes('relation') || checkError.message?.includes('does not exist')) {
        return NextResponse.json(
          { 
            error: 'Database not configured. Please contact support.',
            details: 'Table does not exist. Run the migration script in Supabase.'
          },
          { status: 500 }
        )
      }
      return NextResponse.json(
        { error: 'Failed to check registration. Please try again.' },
        { status: 500 }
      )
    }

    if (existingCandidate) {
      return NextResponse.json(
        { error: 'This email is already registered' },
        { status: 409 }
      )
    }

    // Insert candidate into database
    const { data: candidate, error: insertError } = await supabase
      .from('candidates')
      .insert({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        mobile: mobile.trim(),
        mobile_digits: mobileDigits,
      })
      .select()
      .single()

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      console.error('Error details:', {
        code: insertError.code,
        message: insertError.message,
        details: insertError.details,
        hint: insertError.hint,
      })

      // Provide more specific error messages
      if (insertError.code === 'PGRST116' || insertError.message?.includes('relation') || insertError.message?.includes('does not exist')) {
        return NextResponse.json(
          { 
            error: 'Database not configured. Please contact support.',
            details: 'Table does not exist. Run the migration script in Supabase.'
          },
          { status: 500 }
        )
      }

      if (insertError.code === '42501' || insertError.message?.includes('permission denied') || insertError.message?.includes('row-level security')) {
        return NextResponse.json(
          { 
            error: 'Database permission error. Please contact support.',
            details: 'Row Level Security policy issue. Check Supabase policies.'
          },
          { status: 500 }
        )
      }

      if (insertError.code === '23505' || insertError.message?.includes('duplicate key')) {
        return NextResponse.json(
          { error: 'This email is already registered' },
          { status: 409 }
        )
      }

      return NextResponse.json(
        { 
          error: 'Failed to save registration. Please try again.',
          details: insertError.message || 'Unknown database error'
        },
        { status: 500 }
      )
    }

    // Log for monitoring
    console.log('New candidate registration saved:', {
      id: candidate.id,
      name: candidate.name,
      email: candidate.email,
      timestamp: candidate.created_at,
    })

    // TODO: Send confirmation email to candidate
    // Example: await sendEmail(email, 'Assessment Registration', ...)
    
    // TODO: Send SMS notification
    // Example: await sendSMS(mobile, 'Thank you for registering...')
    
    // TODO: Notify admin/team about new registration
    // Example: await notifyAdmin({ name, email, mobile })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful',
        data: {
          name: candidate.name,
          email: candidate.email,
          mobile: candidate.mobile_digits,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing candidate registration:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve candidates (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    // TODO: Implement authentication/authorization
    // For now, allow access (you should add authentication in production)
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Fetch candidates from database
    const { data: candidates, error, count } = await supabase
      .from('candidates')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('Supabase fetch error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch candidates' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        count: count || 0,
        candidates: candidates || [],
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error fetching candidates:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
