import { config } from "dotenv";
import process from "process";

config();

export const serverConfig = {
  openAiKey: process.env.OPEN_AI_KEY,
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_KEY,
};
