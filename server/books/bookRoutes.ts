import express from "express";
import { BookProvider } from "./data/bookProvider.ts";
import { BookPersistence } from "./data/bookPersistence.ts";

const router = express.Router();
const repository = new BookPersistence()

// Get all books
router.get("/", async (req, res) => {
  const { data, error } = await BookProvider.from("books").select("*").order("title");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});

// Checkout book
router.post("/checkout", async (req, res) => {
  const book = req.body;

  // const { title } = req.body;

  //   const { data, error } = await BookProvider
  //   .from("books")
  //   .select("no_of_copies")
  //   .eq("title", title)
  //   .single();
  
  // if (error) {
  //   return res.status(500).json({ error: error.message });
  // }
  // if (data.no_of_copies <= 0) {
  //   return res.status(400).json({ error: "not available" });
  // } else {
  //   await BookProvider
  //     .from("books")
  //     .update({ no_of_copies: data.no_of_copies - 1 })
  //     .eq("title", title);
  // }
});

export default router;