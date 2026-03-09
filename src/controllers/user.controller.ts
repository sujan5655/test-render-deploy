
import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "List of users",
    data: [
      { id: 1, name: "Ram" },
      { id: 2, name: "Shyam" }
    ]
  });
};

export const createUser = (req: Request, res: Response) => {
  const { name } = req.body;

  res.json({
    success: true,
    message: "User created",
    user: {
      id: Date.now(),
      name
    }
  });
};