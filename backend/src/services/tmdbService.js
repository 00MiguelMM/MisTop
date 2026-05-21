export async function searchTMDB(query, type = "movie") {
  const apiKey = process.env.TMDB_API_KEY;

  const endpoint =
    type === "tv"
      ? "https://api.themoviedb.org/3/search/tv"
      : "https://api.themoviedb.org/3/search/movie";

  const response = await fetch(
    `${endpoint}?api_key=${apiKey}&query=${encodeURIComponent(query)}&language=es-ES`
  );

  if (!response.ok) {
    throw new Error("Error al conectar con TMDB");
  }

  return response.json();
}