
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ykymwnnqredcuxxcvvbn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlreW13bm5xcmVkY3V4eGN2dmJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MzIzNTgsImV4cCI6MjAxNzAwODM1OH0.4NzF_KQ7orv966J-Il_ddEHUHF05WW-ttclU86I8lAU";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;