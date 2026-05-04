import { RankingCard } from "./RankingCard";
import type { RankingItem } from "../types/ranking";

interface RankingListProps {
  items: RankingItem[];
}

export function RankingList({ items }: RankingListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <RankingCard key={item.id} item={item} />
      ))}
    </div>
  );
}