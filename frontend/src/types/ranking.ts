export type RankingCategory =
  | "peliculas"
  | "series"
  | "restaurantes"
  | "lugares"
  | "otros";

export interface RankingItem {
  id: string;
  title: string;
  description: string;
  category: RankingCategory;
  score: number;
  imageUrl?: string;
}