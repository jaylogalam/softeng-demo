import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import BookRoutes from "./books/bookRoutes.ts"

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Book routes
app.use("/", BookRoutes);

// Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
