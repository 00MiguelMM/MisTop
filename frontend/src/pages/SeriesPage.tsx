import { AddItemForm } from "../components/AddItemForm";
import { RankingList } from "../components/RankingList";
import { useRankingsContext } from "../context/RankingContext";
import type { RankingItem } from "../types/ranking";

export function SeriesPage() {
  const { items, addItem } = useRankingsContext();

  const series = items.filter(
    (item) => item.category === "series"
  );

  function handleAddSeries(newItem: RankingItem) {
    addItem(newItem);
  }

  return (
    <section>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-purple-300">
          Series
        </h1>

        <p className="mt-2 text-slate-400">
          Ranking personal de series guardadas en MisTop.
        </p>
      </div>

      <div className="mb-10">
        <AddItemForm onAddItem={handleAddSeries} />
      </div>

      <RankingList items={series} />
    </section>
  );
}