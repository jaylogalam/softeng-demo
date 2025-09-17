import type { Request, Response } from "express";
import { BookPersistence } from "../data/bookPersistence.ts";

export const checkoutBook = async (req: Request, res: Response) => {
  const book = req.body
  try {
    const repository = new BookPersistence();
    const result = await repository.checkoutBook(book);
    return res.json(result);
  } catch (error: any) {
    return res.status(500).json({error: error.message})
  }
}