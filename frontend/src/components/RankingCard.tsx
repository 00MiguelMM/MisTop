import type { RankingItem } from "../types/ranking";

interface RankingCardProps {
  item: RankingItem;
}

export function RankingCard({ item }: RankingCardProps) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-950/40">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
          {item.category}
        </span>

        <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-bold text-yellow-300">
          ⭐ {item.score}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-white">
        {item.title}
      </h3>

      <p className="text-sm leading-6 text-slate-300">
        {item.description}
      </p>
    </article>
  );
}