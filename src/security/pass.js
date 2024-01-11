
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zreissldzlnuodhtkeix.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyZWlzc2xkemxudW9kaHRrZWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MDU4OTMsImV4cCI6MjAyMDE4MTg5M30.yafBT3jbI-D7CdTZW5LGPEulNqzArRowsZhNIEmSPPI"
const supabase = createClient(supabaseUrl, supabaseKey)





export default supabase;