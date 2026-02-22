import { Router, Request, Response } from "express";
import prisma from "../prisma.js";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "User already exists" });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user });
});

export default router;
