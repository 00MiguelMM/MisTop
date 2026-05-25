import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import tmdbRoutes from "./routes/tmdbRoutes.js";
import rankingsRoutes from "./routes/rankings.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend de MisTop funcionando");
});

app.use("/api/tmdb", tmdbRoutes);
app.use("/api/rankings", rankingsRoutes);

const PORT = process.env.PORT || 3000;

// Solo iniciar el servidor en desarrollo local
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}

export default app;