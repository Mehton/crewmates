import { createClient } from '@supabase/supabase-js'
const URL = 'https://uyvfcoplqknrsgkfjsuv.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dmZjb3BscWtucnNna2Zqc3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAyNTAxOTIsImV4cCI6MjA0NTgyNjE5Mn0.MLn0uSFmHhfXRdfCPPNwKM5CaazMLQg93e7sVMpTAUs';


export const supabase = createClient(URL, API_KEY);
