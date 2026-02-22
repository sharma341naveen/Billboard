import { Request, Response, NextFunction } from "express";

export function authMiddleware(
  _req: Request,
  _res: Response,
  next: NextFunction
) {
  // Placeholder authentication middleware
  next();
}
