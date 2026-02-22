import { Router, Request, Response } from "express";
import prisma from "../prisma.js";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post("/", async (req: Request, res: Response) => {
  const { title, description, listId, boardId } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      listId,
      boardId,
    },
  });

  res.json(task);
});

export default router;
