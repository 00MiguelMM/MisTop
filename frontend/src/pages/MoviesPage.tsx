import { RankingList } from "../components/RankingList";
import { useRankingsContext } from "../context/RankingContext";

export function MoviesPage() {
  const { items } = useRankingsContext();

  const movies = items.filter((item) => item.category === "peliculas");

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-300">
          Películas
        </h1>

        <p className="mt-2 text-slate-400">
          Ranking personal de películas guardadas en MisTop.
        </p>
      </div>

      <RankingList items={movies} />
    </section>
  );
}