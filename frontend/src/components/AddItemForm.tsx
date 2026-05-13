import { useState } from "react";
import type { RankingCategory, RankingItem } from "../types/ranking";

interface AddItemFormProps {
  onAddItem: (item: RankingItem) => void;
}

export function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<RankingCategory>("peliculas");
  const [score, setScore] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const newItem: RankingItem = {
      id: crypto.randomUUID(),
      title,
      description,
      category,
      score: Number(score),
    };

    onAddItem(newItem);

    setTitle("");
    setDescription("");
    setCategory("peliculas");
    setScore("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg"
    >
      <h2 className="mb-4 text-xl font-semibold text-white">
        Añadir nuevo elemento
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400"
        />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value as RankingCategory)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        >
          <option value="peliculas">Películas</option>
          <option value="series">Series</option>
        </select>

        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400 md:col-span-2"
        />

        <input
          type="number"
          placeholder="Puntuación"
          value={score}
          onChange={(event) => setScore(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 p-3 font-semibold text-white hover:bg-blue-500"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}