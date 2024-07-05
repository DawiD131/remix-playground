import { createClient } from "@supabase/supabase-js";
import { serverConfig } from "./config";

export const supabase = createClient(
  serverConfig.supabaseUrl,
  serverConfig.supabaseKey,
);
