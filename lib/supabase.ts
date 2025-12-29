import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only throw error at runtime, not during build
if (typeof window === 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
  console.error(
    '⚠️ Missing Supabase environment variables. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY'
  )
}

// Validate that we have real credentials (not placeholder)
const isValidConfig = supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'https://placeholder.supabase.co' &&
  supabaseAnonKey !== 'placeholder-key' &&
  supabaseUrl.startsWith('https://') &&
  supabaseAnonKey.length > 20 // Anon keys are typically long

export const supabase = isValidConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient('https://placeholder.supabase.co', 'placeholder-key')

// Export a helper to check if Supabase is configured
export const isSupabaseConfigured = () => isValidConfig

// Database types
export interface Candidate {
  id: string
  name: string
  email: string
  mobile: string
  mobile_digits: string
  created_at: string
}

