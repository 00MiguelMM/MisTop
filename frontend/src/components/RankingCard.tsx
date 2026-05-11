import type { RankingItem } from "../types/ranking";

interface RankingCardProps {
  item: RankingItem;
}

export function RankingCard({ item }: RankingCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{item.title}</h3>

      <p className="text-sm text-gray-600">{item.description}</p>

      <div className="flex justify-between items-center mt-2">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
          {item.category}
        </span>

        <span className="font-bold text-blue-600">⭐ {item.score}</span>
      </div>
    </div>
  );
}