// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://uolvhraaxrjpudnvnupn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbHZocmFheHJqcHVkbnZudXBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2OTEzNzIsImV4cCI6MjA2NTI2NzM3Mn0.zksFYgD5QRiqfpXPHvriEfo0JG7h7XuBJiJyx5wJ298";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);