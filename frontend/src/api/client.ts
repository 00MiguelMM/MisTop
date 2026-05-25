import type { Ranking } from "../types/ranking";

const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? "/api" : "http://localhost:3000/api");

export async function getRankings(): Promise<Ranking[]> {
  const response = await fetch(`${API_URL}/rankings`);

  if (!response.ok) {
    throw new Error("Error al obtener rankings");
  }

  return response.json();
}

export async function createRanking(name: string): Promise<Ranking> {
  const response = await fetch(`${API_URL}/rankings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error("Error al crear ranking");
  }

  return response.json();
}