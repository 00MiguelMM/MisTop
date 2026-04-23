function getRankings(req, res) {
    res.json([
        { id: 1, name: "Top restaurantes" },
        { id: 2, name: "Top gimnasios" },
        { id: 3, name: "Top pistas de pádel" }
    ]);
}

module.exports = { getRankings };