-- Supabase Database Migration for Candidate Registrations
-- Run this in Supabase SQL Editor: https://app.supabase.com/project/_/sql/new

-- Create candidates table
CREATE TABLE IF NOT EXISTS candidates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  mobile TEXT NOT NULL,
  mobile_digits TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_candidates_email ON candidates(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_candidates_created_at ON candidates(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid errors on re-run)
DROP POLICY IF EXISTS "Allow public inserts" ON candidates;
DROP POLICY IF EXISTS "Allow public reads" ON candidates;

-- Create policy to allow inserts (for API)
CREATE POLICY "Allow public inserts" ON candidates
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow reads (for admin API)
CREATE POLICY "Allow public reads" ON candidates
  FOR SELECT
  TO anon
  USING (true);

-- Verify table was created
SELECT * FROM candidates LIMIT 1;

