// Quick test script to verify Supabase connection
// Run with: node scripts/test-supabase.js

require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log('\n🔍 Checking Supabase Configuration...\n')

if (!supabaseUrl) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_URL is missing!')
  process.exit(1)
}

if (!supabaseKey) {
  console.error('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY is missing!')
  process.exit(1)
}

console.log('✅ Environment variables found:')
console.log(`   URL: ${supabaseUrl}`)
console.log(`   Key: ${supabaseKey.substring(0, 20)}...`)

// Test connection
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('\n🔌 Testing Supabase connection...\n')

supabase
  .from('candidates')
  .select('count')
  .limit(1)
  .then(({ data, error }) => {
    if (error) {
      if (error.code === 'PGRST116') {
        console.log('⚠️  Connection successful, but table "candidates" does not exist yet.')
        console.log('   → Run the SQL migration from docs/supabase-migration.sql\n')
      } else {
        console.error('❌ Connection error:', error.message)
        console.error('   → Check your credentials and try again\n')
      }
    } else {
      console.log('✅ Connection successful!')
      console.log('✅ Table "candidates" exists and is accessible\n')
    }
  })
  .catch((err) => {
    console.error('❌ Failed to connect:', err.message)
    console.error('   → Verify your credentials in .env.local\n')
  })

