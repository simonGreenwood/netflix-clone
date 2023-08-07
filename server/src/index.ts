import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

import { PORT } from "./utils/config";

app.get("/ping", (_req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
