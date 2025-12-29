# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## How to Get Your Supabase Credentials

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Select your project (or create a new one)
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## For Vercel Deployment

**⚠️ IMPORTANT**: If you're seeing "Server configuration error" on your Vercel site, follow these steps:

1. Go to your Vercel project dashboard: [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project → **Settings** → **Environment Variables**
3. Add both variables:
   - **Name**: `NEXT_PUBLIC_SUPABASE_URL` → **Value**: Your Supabase Project URL
   - **Name**: `NEXT_PUBLIC_SUPABASE_ANON_KEY` → **Value**: Your Supabase anon key
4. **CRITICAL**: Check all three environments (Production, Preview, Development) for each variable
5. **MUST REDEPLOY**: After adding variables, go to **Deployments** → Click "..." → **Redeploy**

**📖 Detailed step-by-step guide**: See [docs/VERCEL_ENV_SETUP.md](docs/VERCEL_ENV_SETUP.md)

## Example

```bash
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4eHgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjU2NzYwMCwiZXhwIjoxOTU4MTQzNjAwfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Note:** Never commit `.env.local` to git. It's already in `.gitignore`.

