// supabaseClient.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = 'https://hdidqoiktuqpvlgodeho.supabase.co';
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkaWRxb2lrdHVxcHZsZ29kZWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3ODY1NDYsImV4cCI6MjAzNjM2MjU0Nn0.TY-gEDW__2sl3xNUOwiK_jJDM80oy8POHP5bkYSrBKA';

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
