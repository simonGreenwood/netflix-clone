import express from "express";
const app = express();

import { PORT } from "./utils/config";

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
