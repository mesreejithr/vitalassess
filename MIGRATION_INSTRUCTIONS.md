# Database Migration Instructions

## Quick Steps

1. **Go to Supabase SQL Editor:**
   https://supabase.com/dashboard/project/eumvxgslrjvzqdlbsibi/sql/new

2. **Copy and paste this SQL:**

```sql
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
```

3. **Click "Run" button**

4. **You should see:** "Success. No rows returned"

## Verify Table Was Created

After running the migration:
1. Go to: https://supabase.com/dashboard/project/eumvxgslrjvzqdlbsibi/editor
2. You should see a `candidates` table in the left sidebar
3. Click on it to see the table structure

## Then Test Your App

1. Restart your dev server (if running)
2. Visit: http://localhost:3000/free-assessment
3. Submit a test registration
4. Check the `candidates` table in Supabase - you should see your data!

