import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pznhomooczgvxapuzubr.supabase.co'; // URL
const supabaseAnonKey = 'eyJhbGciOi...'; // anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
