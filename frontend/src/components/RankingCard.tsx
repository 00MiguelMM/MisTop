import type { RankingItem } from "../types/ranking";

interface RankingCardProps {
  item: RankingItem;
}

const statusStyles = {
  terminada: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  viendo: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  pendiente: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
};

const statusText = {
  terminada: "✅ Terminada",
  viendo: "⏳ Viendo",
  pendiente: "📌 Pendiente",
};

export function RankingCard({ item }: RankingCardProps) {
  return (
    <article className="group rounded-2xl border border-slate-700 bg-slate-900/90 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-950/40">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
          {item.category}
        </span>

        <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-sm font-bold text-yellow-300">
          ⭐ {item.score}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-white transition group-hover:text-blue-300">
        {item.title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-slate-300">
        {item.description}
      </p>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
          {item.genre}
        </span>

        <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-slate-300">
          {item.year}
        </span>

        <span className={`rounded-full border px-3 py-1 ${statusStyles[item.status]}`}>
          {statusText[item.status]}
        </span>
      </div>
    </article>
  );
}