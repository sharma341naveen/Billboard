import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "Billboard API is running 🚀" });
});

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
