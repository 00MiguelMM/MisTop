export type RankingCategory = "peliculas" | "series";
export type RankingStatus = "terminada" | "viendo" | "pendiente";

export interface RankingItem {
  id: string;
  title: string;
  description: string;
  category: RankingCategory;
  status: RankingStatus;
  genre: string;
  year: number;
  score: number;
}