import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hsrlpfdonclrjyqtodrz.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzcmxwZmRvbmNscmp5cXRvZHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2OTA4MjQsImV4cCI6MjA3MDI2NjgyNH0.jaaJjfLoBnA1K38kbmzx37RjfKvfzYiO8nc8juaopf0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
