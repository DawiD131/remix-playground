import express from "express";
import type { Response, Request } from "express";
import { openai } from "../openai.client";

const router = express.Router();

const systemPrompt = `
 You are blog owner assistant. Your task is to develop blog entry by entry title provided by blogger. 
 
 stick to these rules ###
  - Blog entry can't be longer than 200 words
 ### 
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
router.post("/", async (req: Request, res: Response) => {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: req.body.title },
    ],
    model: "gpt-4",
  });

  res.send(completion.choices[0].message);
});

export default router;
