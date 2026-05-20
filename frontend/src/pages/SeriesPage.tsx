import { RankingList } from "../components/RankingList";
import { useRankingsContext } from "../context/RankingContext";

export function SeriesPage() {
  const { items } = useRankingsContext();

  const series = items.filter((item) => item.category === "series");

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

      <RankingList items={series} />
    </section>
  );
}