import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

interface CandidateData {
  name: string
  email: string
  mobile: string
}

export async function POST(request: NextRequest) {
  try {
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
    const { data: existingCandidate } = await supabase
      .from('candidates')
      .select('email')
      .eq('email', email.toLowerCase().trim())
      .single()

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
      return NextResponse.json(
        { error: 'Failed to save registration. Please try again.' },
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
