# Quick Guide: Setting Up Environment Variables in Vercel

## The Error You're Seeing

```
Server configuration error. Please contact support.
Supabase environment variables are missing. Please configure 
NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in Vercel.
```

This means your Vercel deployment doesn't have the Supabase credentials configured.

## Step-by-Step Fix (5 minutes)

### Step 1: Get Your Supabase Credentials

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Select your project (or create a new one if you haven't)
3. Click on **Settings** (gear icon in the left sidebar)
4. Click on **API** in the settings menu
5. You'll see two values you need:
   - **Project URL** - Looks like: `https://xxxxxxxxxxxxx.supabase.co`
   - **anon public** key - A long string starting with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

**Copy both of these values** - you'll need them in the next step.

### Step 2: Add Environment Variables in Vercel

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your **VitalAssess** project
3. Click on **Settings** in the top navigation
4. Click on **Environment Variables** in the left sidebar
5. You'll see a form to add variables. Add them one by one:

#### Add First Variable:
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: Paste your Supabase Project URL (from Step 1)
- **Environment**: Select **Production**, **Preview**, and **Development** (check all three)
- Click **Save**

#### Add Second Variable:
- **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: Paste your Supabase anon public key (from Step 1)
- **Environment**: Select **Production**, **Preview**, and **Development** (check all three)
- Click **Save**

### Step 3: Redeploy Your Application

**Important**: Environment variables only take effect after redeployment!

1. Go to the **Deployments** tab in your Vercel project
2. Find your latest deployment
3. Click the **"..."** (three dots) menu next to it
4. Click **"Redeploy"**
5. Confirm the redeploy

**OR** simply push a new commit to trigger a new deployment:
```bash
git commit --allow-empty -m "Trigger redeploy for env vars"
git push
```

### Step 4: Verify It Works

1. Wait for the deployment to finish (usually 1-2 minutes)
2. Visit your Vercel site URL
3. Go to the **Free Assessment** page (`/free-assessment`)
4. Try submitting a test registration
5. It should work now! ✅

## Visual Guide

### Vercel Environment Variables Page Should Look Like:

```
Environment Variables
┌─────────────────────────────────────────────────┐
│ Name                            Environments    │
├─────────────────────────────────────────────────┤
│ NEXT_PUBLIC_SUPABASE_URL        🟢 🟢 🟢        │
│ NEXT_PUBLIC_SUPABASE_ANON_KEY   🟢 🟢 🟢        │
└─────────────────────────────────────────────────┘
```

The green dots (🟢) indicate which environments the variable is set for.

## Common Mistakes to Avoid

❌ **Don't** add spaces or quotes around the values
❌ **Don't** forget to check all three environments (Production, Preview, Development)
❌ **Don't** forget to redeploy after adding variables
❌ **Don't** use the service_role key instead of anon key (security risk!)

✅ **Do** copy the exact values from Supabase
✅ **Do** set variables for all environments
✅ **Do** redeploy after adding variables
✅ **Do** verify the variable names are exactly: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Troubleshooting

### "Still getting the error after redeploy"

1. **Double-check variable names**: They must be exactly:
   - `NEXT_PUBLIC_SUPABASE_URL` (not `SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_URL_`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` (not `SUPABASE_KEY` or `ANON_KEY`)

2. **Verify values are correct**:
   - URL should start with `https://` and end with `.supabase.co`
   - Key should be a long JWT token starting with `eyJ...`

3. **Check which environment you're testing**:
   - Production URL uses Production env vars
   - Preview URLs use Preview env vars
   - Make sure variables are set for the right environment

4. **Wait a bit longer**: Sometimes it takes 2-3 minutes for env vars to propagate

### "I don't have a Supabase project"

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for free (no credit card required)
3. Create a new project
4. Wait 2 minutes for setup
5. Follow Step 1 above to get credentials
6. **Important**: Also run the database migration script from `docs/supabase-migration.sql` in Supabase SQL Editor

### "How do I know if it's working?"

After redeploying, check:
1. Visit your site's `/free-assessment` page
2. Submit a test registration
3. If successful, you'll see a green success message
4. Check your Supabase dashboard → Table Editor → `candidates` table
5. You should see your test registration there!

## Security Notes

- ✅ The `anon` key is safe to use in client-side code (it's public)
- ✅ Row Level Security (RLS) policies protect your data
- ❌ Never use the `service_role` key in frontend code (it bypasses RLS)
- ❌ Never commit environment variables to git (they're in `.gitignore`)

## Quick Reference

**Variable Names:**
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Where to get them:**
- Supabase Dashboard → Settings → API

**Where to set them:**
- Vercel Dashboard → Your Project → Settings → Environment Variables

**After setting:**
- Must redeploy for changes to take effect!

