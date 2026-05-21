import { useState } from "react";
import type {
  RankingCategory,
  RankingItem,
  RankingStatus,
} from "../types/ranking";

interface AddItemFormProps {
  onAddItem: (item: RankingItem) => void;
}

export function AddItemForm({ onAddItem }: AddItemFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] =
    useState<RankingCategory>("peliculas");

  const [status, setStatus] =
    useState<RankingStatus>("pendiente");

  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [score, setScore] = useState("");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!title.trim()) {
      setError("El título es obligatorio");
      return;
    }

    if (!description.trim()) {
      setError("La descripción es obligatoria");
      return;
    }

    if (Number(score) < 1 || Number(score) > 10) {
      setError("La puntuación debe estar entre 1 y 10");
      return;
    }

    setError("");

    const newItem: RankingItem = {
      id: crypto.randomUUID(),
      title,
      description,
      category,
      status,
      genre,
      year: Number(year),
      score: Number(score),
    };

    onAddItem(newItem);

    setSuccessMessage("Elemento añadido correctamente");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);

    setTitle("");
    setDescription("");
    setCategory("peliculas");
    setStatus("pendiente");
    setGenre("");
    setYear("");
    setScore("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl backdrop-blur"
    >
      <h2 className="mb-1 text-xl font-semibold text-white">
        Añadir a mi ranking
      </h2>

      <p className="mb-5 text-sm text-slate-400">
        Guarda una película o serie con tu puntuación personal.
      </p>

      {error && (
        <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-sm text-emerald-300">
          {successMessage}
        </div>
      )}

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
          onChange={(event) =>
            setCategory(event.target.value as RankingCategory)
          }
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
          type="text"
          placeholder="Género"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400"
        />

        <input
          type="number"
          placeholder="Año"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400"
        />

        <select
          value={status}
          onChange={(event) =>
            setStatus(event.target.value as RankingStatus)
          }
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
        >
          <option value="terminada">Terminada</option>
          <option value="viendo">Viendo</option>
          <option value="pendiente">Pendiente</option>
        </select>

        <input
          type="number"
          placeholder="Puntuación"
          value={score}
          onChange={(event) => setScore(event.target.value)}
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-500 active:scale-95 md:col-span-2"
        >
          Añadir al ranking
        </button>
      </div>
    </form>
  );
}