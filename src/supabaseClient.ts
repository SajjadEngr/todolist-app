import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://nggbsmiumxwjkjsevdhq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5nZ2JzbWl1bXh3amtqc2V2ZGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxOTQ0MDksImV4cCI6MjA1NDc3MDQwOX0.T8uCl05B5MxplgwHw1Pnz81pHewlOnXljLCx_sCt1uc";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
