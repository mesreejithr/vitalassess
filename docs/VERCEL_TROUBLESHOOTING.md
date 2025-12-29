# Vercel Deployment Troubleshooting

## Candidate Registration Failing

If candidate registration is failing on Vercel, check the following:

### 1. Environment Variables

**Most Common Issue**: Missing Supabase environment variables in Vercel.

**Solution**:
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL (e.g., `https://xxxxx.supabase.co`)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon/public key

4. **Important**: After adding variables, you must **Redeploy** your project for changes to take effect.

### 2. Supabase Database Setup

**Check if the table exists**:
1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Verify that the `candidates` table exists

**If table doesn't exist**:
1. Go to **SQL Editor** in Supabase
2. Run the migration script from `docs/supabase-migration.sql`
3. Verify the table was created

### 3. Row Level Security (RLS) Policies

**Check RLS policies**:
1. In Supabase dashboard, go to **Authentication** → **Policies**
2. Verify these policies exist for the `candidates` table:
   - **Allow public inserts** - FOR INSERT TO anon
   - **Allow public reads** - FOR SELECT TO anon

**If policies are missing**:
1. Run the migration script again (it includes policy creation)
2. Or manually create the policies in Supabase dashboard

### 4. Check Vercel Logs

**View deployment logs**:
1. Go to Vercel dashboard → Your project → **Deployments**
2. Click on the latest deployment
3. Check the **Logs** tab for any errors

**View runtime logs**:
1. Go to Vercel dashboard → Your project → **Functions**
2. Click on `/api/candidates`
3. Check the logs for API errors

### 5. Test the API Directly

You can test the API endpoint directly:

```bash
curl -X POST https://your-domain.vercel.app/api/candidates \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "mobile": "+1234567890"
  }'
```

### Common Error Messages

| Error Message | Cause | Solution |
|--------------|-------|----------|
| "Server configuration error" | Missing env variables | Add Supabase env vars in Vercel |
| "Database not configured" | Table doesn't exist | Run migration script in Supabase |
| "Database permission error" | RLS policies missing | Create RLS policies |
| "This email is already registered" | Duplicate email | Normal - email already exists |

### Quick Checklist

- [ ] Environment variables set in Vercel (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
- [ ] Project redeployed after adding env variables
- [ ] `candidates` table exists in Supabase
- [ ] RLS policies are created and enabled
- [ ] Supabase project is active (not paused)

### Still Having Issues?

1. Check the browser console for client-side errors
2. Check Vercel function logs for server-side errors
3. Verify Supabase project is active and not on free tier limits
4. Test locally with `.env.local` file to ensure code works

