import { createClient, SupabaseClient } from '@supabase/supabase-js';

class SupabaseProvider {
  private static instance: SupabaseClient;

  private constructor() {}

  public static getInstance(): SupabaseClient {
    if (!SupabaseProvider.instance) {
      SupabaseProvider.instance = createClient(
        process.env.SUPABASE_URL as string,
        process.env.SUPABASE_ANON_KEY as string
      );
      console.log("Supabase client initialized ✅");
    }
    return SupabaseProvider.instance;
  }
}

export default SupabaseProvider;