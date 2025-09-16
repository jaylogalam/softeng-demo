import express from "express";
import cors from "cors";

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
