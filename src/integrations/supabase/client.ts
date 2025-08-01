// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://trlakltxicoxeyfnxrmv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRybGFrbHR4aWNveGV5Zm54cm12Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMDAwMTksImV4cCI6MjA2ODY3NjAxOX0.x7HnBG7u5lxQuR-x5UtHTjVXyhi0IAGFAbgASuBDwA4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});