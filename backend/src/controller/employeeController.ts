import { type Request, type Response } from "express";

const addEmployee = async (req: Request, res: Response) => {
  res.status(200).json({ message: "IT WORKS" });
};

export { addEmployee };
