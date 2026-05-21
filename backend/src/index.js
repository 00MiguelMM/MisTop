import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rankingsRoutes from "./routes/rankings.routes.js";
import tmdbRoutes from "./routes/tmdbRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend de MisTop funcionando");
});

app.use("/api/rankings", rankingsRoutes);
app.use("/api/tmdb", tmdbRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});