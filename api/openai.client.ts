import { config } from "dotenv";
config();
import OpenAI from "openai";
import { serverConfig } from "./config";

export const openai = new OpenAI({
  apiKey: serverConfig.openAiKey,
});
