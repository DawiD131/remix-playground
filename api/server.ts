import express from "express";
import generate from "./routes/generate";
import entries from "./routes/entries";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(express.json());

app.use("/generator", generate);
app.use("/entries", entries);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
