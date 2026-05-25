const rankings = [
  { id: 1, name: "Top películas favoritas" },
  { id: 2, name: "Top series favoritas" },
];

export function getRankings(req, res) {
  res.status(200).json(rankings);
}

export function getRankingById(req, res) {
  const ranking = rankings.find(
    (ranking) => ranking.id === Number(req.params.id)
  );

  if (!ranking) {
    return res.status(404).json({
      message: "Ranking no encontrado",
    });
  }

  res.status(200).json(ranking);
}

export function createRanking(req, res) {
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

  res.status(201).json(newRanking);
}

export function updateRanking(req, res) {
  const ranking = rankings.find(
    (ranking) => ranking.id === Number(req.params.id)
  );

  if (!ranking) {
    return res.status(404).json({
      message: "Ranking no encontrado",
    });
  }

  const { name } = req.body;

  ranking.name = name || ranking.name;

  res.status(200).json(ranking);
}

export function deleteRanking(req, res) {
  const rankingIndex = rankings.findIndex(
    (ranking) => ranking.id === Number(req.params.id)
  );

  if (rankingIndex === -1) {
    return res.status(404).json({
      message: "Ranking no encontrado",
    });
  }

  rankings.splice(rankingIndex, 1);

  res.status(200).json({
    message: "Ranking eliminado correctamente",
  });
}