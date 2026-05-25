const rankings = [
  { id: 1, name: "Top películas favoritas" },
  { id: 2, name: "Top series favoritas" },
];

export default function handler(req, res) {
  if (req.url === "/api/rankings" && req.method === "GET") {
    return res.status(200).json(rankings);
  }

  if (req.url === "/api/rankings" && req.method === "POST") {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "El nombre es obligatorio",
      });
    }

    const newRanking = {
      id: rankings.length + 1,
      name,
    };

    rankings.push(newRanking);

    return res.status(201).json(newRanking);
  }

  return res.status(404).json({
    message: "Ruta no encontrada",
  });
}