import express from "express";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import "express-async-errors";
const prisma = new PrismaClient();
const router = express.Router();

const removePasswordHash = (user: User): Omit<User, "passwordHash"> => {
  delete user.passwordHash;
  return user;
};
router.get("/", async (_req, res) => {
  const users = await prisma.user.findMany({});
  const usersWithoutPasswordHash = users.map(removePasswordHash);
  return res.json(usersWithoutPasswordHash);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.findUnique({
    where: { id },
  });
  const userWithoutPasswordHash = removePasswordHash(user);
  return res.json(userWithoutPasswordHash);
});
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
    },
  });
  const userWithoutPasswordHash = removePasswordHash(user);
  return res.json(userWithoutPasswordHash);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.update({
    where: { id },
    data: {
      email,
      passwordHash,
    },
  });
  const userWithoutPasswordHash = removePasswordHash(user);
  return res.json(userWithoutPasswordHash);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id },
  });

  const userWithoutPasswordHash = removePasswordHash(user);
  return res.json(userWithoutPasswordHash).status(204);
});

export default router;
