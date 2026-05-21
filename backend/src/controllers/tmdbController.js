import { searchTMDB } from "../services/tmdbService.js";

export async function searchContent(req, res) {
  try {
    const { query, type } = req.query;

    if (!query) {
      return res.status(400).json({
        message: "El parámetro query es obligatorio",
      });
    }

    const data = await searchTMDB(query, type);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error al buscar contenido",
      error: error.message,
    });
  }
}