import express from "express";
import type { Response, Request } from "express";
import { supabase } from "../supabase.client";

const router = express.Router();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
router.post("/", async (req: Request, res: Response) => {
  const { error } = await supabase
    .from("entry")
    .insert({ title: req.body.title, content: req.body.content });

  res.status(200);
});

export default router;
