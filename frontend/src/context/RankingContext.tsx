import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { RankingItem } from "../types/ranking";

const initialItems: RankingItem[] = [
  {
    id: "1",
    title: "Interstellar",
    description: "Una película de ciencia ficción sobre el espacio, el tiempo y la familia.",
    category: "peliculas",
    status: "terminada",
    genre: "Ciencia ficción",
    year: 2014,
    score: 9.5,
  },
  {
    id: "2",
    title: "Lo Imposible",
    description: "Una historia emocionante basada en hechos reales sobre supervivencia y familia.",
    category: "peliculas",
    status: "terminada",
    genre: "Drama",
    year: 2012,
    score: 8.7,
  },
  {
    id: "3",
    title: "La Casa de Papel",
    description: "Una serie española de atracos, tensión y personajes muy reconocibles.",
    category: "series",
    status: "viendo",
    genre: "Thriller",
    year: 2017,
    score: 8.9,
  },
  {
    id: "4",
    title: "Breaking Bad",
    description: "Una serie intensa sobre decisiones, ambición y consecuencias.",
    category: "series",
    status: "terminada",
    genre: "Drama criminal",
    year: 2008,
    score: 9.8,
  },
  {
    id: "5",
    title: "Oppenheimer",
    description: "Una película biográfica sobre ciencia, poder y responsabilidad.",
    category: "peliculas",
    status: "pendiente",
    genre: "Biografía",
    year: 2023,
    score: 9.1,
  },
];

interface RankingContextType {
  items: RankingItem[];
  addItem: (item: RankingItem) => void;
}

const RankingContext = createContext<RankingContextType | undefined>(undefined);

interface RankingProviderProps {
  children: ReactNode;
}

export function RankingProvider({ children }: RankingProviderProps) {
  const [items, setItems] = useState<RankingItem[]>(initialItems);

  function addItem(item: RankingItem) {
    setItems((currentItems) => [...currentItems, item]);
  }

  return (
    <RankingContext.Provider value={{ items, addItem }}>
      {children}
    </RankingContext.Provider>
  );
}

export function useRankingsContext() {
  const context = useContext(RankingContext);

  if (!context) {
    throw new Error("useRankingsContext debe usarse dentro de RankingProvider");
  }

  return context;
}