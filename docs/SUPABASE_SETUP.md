# Supabase Setup Guide for Vercel

## Why Supabase?

Since you're hosting on **Vercel** (serverless), file-based storage won't work. Vercel's serverless functions have a read-only filesystem. Supabase provides a PostgreSQL database that works perfectly with Vercel.

## Quick Setup (5 minutes)

### Step 1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for free (no credit card required)
3. Click "New Project"
4. Choose a name (e.g., "vitalassess")
5. Set a database password (save this securely)
6. Choose a region closest to your users
7. Click "Create new project" (takes ~2 minutes)

### Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`)

### Step 3: Create Database Table

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Paste this SQL:

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

4. Click "Run" (or press Cmd/Ctrl + Enter)
5. You should see "Success. No rows returned"

### Step 4: Configure Environment Variables

#### For Local Development:

1. Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace the values with your actual Supabase credentials

#### For Vercel Production:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
4. Make sure to add them for **Production**, **Preview**, and **Development** environments
5. Redeploy your application

### Step 5: Install Dependencies

```bash
npm install @supabase/supabase-js
```

### Step 6: Test

1. Start your dev server: `npm run dev`
2. Visit `http://localhost:3000/free-assessment`
3. Submit a test registration
4. Check your Supabase dashboard → **Table Editor** → `candidates` table
5. You should see your test registration!

## Verification Checklist

- [ ] Supabase project created
- [ ] Database table created (run SQL)
- [ ] Environment variables set in `.env.local`
- [ ] Environment variables set in Vercel dashboard
- [ ] Dependencies installed (`@supabase/supabase-js`)
- [ ] Test registration successful
- [ ] Data visible in Supabase dashboard

## Supabase Free Tier Limits

- **Database Size**: 500 MB
- **Bandwidth**: 2 GB/month
- **API Requests**: Unlimited
- **File Storage**: 1 GB

**This is perfect for:**
- 0 - 50,000+ candidate registrations
- High concurrent traffic
- Production-ready reliability

## Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists in project root
- Check variable names are exactly: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart your dev server after adding variables

### "relation 'candidates' does not exist"
- Run the SQL script in Supabase SQL Editor
- Check table name is exactly `candidates` (lowercase)

### "new row violates row-level security policy"
- Make sure you ran the RLS policies in the SQL script
- Check policies are enabled in Supabase dashboard → Authentication → Policies

## Next Steps

1. **Add Authentication** (optional): Secure the admin page
2. **Email Notifications**: Use Supabase Edge Functions or Resend
3. **SMS Notifications**: Integrate Twilio or similar
4. **Analytics**: Use Supabase dashboard for insights

## Support

- Supabase Docs: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
- Vercel + Supabase: https://vercel.com/integrations/supabase

