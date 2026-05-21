import { AddItemForm } from "../components/AddItemForm";
import { RankingList } from "../components/RankingList";
import { useRankingsContext } from "../context/RankingContext";
import type { RankingItem } from "../types/ranking";

export function MoviesPage() {
  const { items, addItem } = useRankingsContext();

  const movies = items.filter(
    (item) => item.category === "peliculas"
  );

  function handleAddMovie(newItem: RankingItem) {
    addItem(newItem);
  }

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

      <div className="mb-10">
        <AddItemForm onAddItem={handleAddMovie} />
      </div>

      <RankingList items={movies} />
    </section>
  );
}