import express from "express";
import { checkoutBook } from "./usecases/checkoutBook.ts";
import { getAllBooks } from "./usecases/getAllBooks.ts";

const router = express.Router();

// Get all books
router.get("/", getAllBooks)
router.post("/checkout", checkoutBook);

export default router;