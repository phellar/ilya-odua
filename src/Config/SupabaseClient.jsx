
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mpfxcjjgxqjenjxhiwju.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wZnhjampneHFqZW5qeGhpd2p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyNjIzMzUsImV4cCI6MjAzOTgzODMzNX0.M-NJMlOSRXousIqVwE5tu9xciHxqAbSfdpeKRfiTct4`
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase