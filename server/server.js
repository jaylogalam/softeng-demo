import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Get all books
app.get("/", async (req, res) => {
  const database = createClient(
    supabaseUrl,
    supabaseKey
  );

  const { data, error } = await database.from("books").select("*").order("title");
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.json(data);
});

// Checkout book
app.post("/checkout", async (req, res) => {
  const { id } = req.body;
  const database = createClient(
    supabaseUrl,
    supabaseKey
  )

  const { data, error } = await database
    .from("books")
    .select("no_of_copies")
    .eq("id", id)
    .single();
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  if (data.no_of_copies <= 0) {
    return res.status(400).json({ error: "not available" });
  } else {
    await database
      .from("books")
      .update({ no_of_copies: data.no_of_copies - 1 })
      .eq("id", id);
  }
});

// Return book
app.post("/checkout", async (req, res) => {
  const { id } = req.body;
  const database = createClient(
    supabaseUrl,
    supabaseKey
  )

  const { data, error } = await database
    .from("books")
    .select("no_of_copies")
    .eq("id", id)
    .single();
  
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  if (data.no_of_copies <= 0) {
    return res.status(400).json({ error: "not available" });
  } else {
    await database
      .from("books")
      .update({ no_of_copies: data.no_of_copies + 1 })
      .eq("id", id);
  }
});

// Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
