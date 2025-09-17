import type { Request, Response } from "express";
import { BookPersistence } from "../data/bookPersistence.ts";

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const repository = new BookPersistence();
    const books = await repository.getAllBooks();
    console.log(books)
    res.json(books);
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({error: error.message});
  }
};
