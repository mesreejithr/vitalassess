# Quick Start Guide - Vercel + Supabase

## ✅ What Changed

Your app has been **migrated from file storage to Supabase** to work with Vercel's serverless environment.

## 🚀 Setup Steps (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Supabase Account & Project
1. Go to [https://supabase.com](https://supabase.com) and sign up (free)
2. Click "New Project"
3. Fill in project details and wait ~2 minutes for setup

### 3. Create Database Table
1. In Supabase dashboard → **SQL Editor**
2. Open `docs/supabase-migration.sql`
3. Copy and paste the SQL into the editor
4. Click "Run"

### 4. Get API Credentials
1. In Supabase → **Settings** → **API**
2. Copy:
   - **Project URL**
   - **anon/public key**

### 5. Set Environment Variables

**For Local Development:**
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**For Vercel:**
1. Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add both variables for all environments
3. Redeploy

### 6. Test It!
```bash
npm run dev
```
Visit `http://localhost:3000/free-assessment` and submit a test registration.

## 📊 Verify It Works

1. Submit a registration on `/free-assessment`
2. Check Supabase dashboard → **Table Editor** → `candidates`
3. You should see your test data!

## 🎯 Capacity

With Supabase, you can handle:
- ✅ **Unlimited registrations** (free tier: 500MB database)
- ✅ **High concurrent traffic**
- ✅ **Production-ready reliability**
- ✅ **Works perfectly on Vercel**

## 📚 Full Documentation

- **Detailed Setup**: [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md)
- **Environment Variables**: [ENV_SETUP.md](ENV_SETUP.md)
- **Scalability Info**: [docs/STORAGE_SCALABILITY.md](docs/STORAGE_SCALABILITY.md)

## ❓ Troubleshooting

**"Missing Supabase environment variables"**
→ Check `.env.local` exists and has correct variable names

**"relation 'candidates' does not exist"**
→ Run the SQL migration in Supabase SQL Editor

**Data not saving?**
→ Check Supabase dashboard → Authentication → Policies are enabled

## 🎉 You're Done!

Your app is now ready for Vercel deployment with persistent database storage!

