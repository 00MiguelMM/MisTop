import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createRanking, getRankings } from "../api/client";
import { useRankingsContext } from "../context/RankingContext";
import type { Ranking } from "../types/ranking";

export function HomePage() {
  const { items } = useRankingsContext();

  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newRankingName, setNewRankingName] = useState("");

  const total = items.length;
  const movies = items.filter((item) => item.category === "peliculas").length;
  const series = items.filter((item) => item.category === "series").length;
  const completed = items.filter((item) => item.status === "terminada").length;

  useEffect(() => {
    async function loadRankings() {
      try {
        setLoading(true);
        setError("");

        const data = await getRankings();
        setRankings(data);
      } catch {
        setError("No se pudieron cargar los rankings desde el backend.");
      } finally {
        setLoading(false);
      }
    }

    loadRankings();
  }, []);

  async function handleCreateRanking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRankingName.trim()) {
      setError("El nombre del ranking es obligatorio.");
      return;
    }

    try {
      setError("");

      const createdRanking = await createRanking(newRankingName);

      setRankings((currentRankings) => [
        ...currentRankings,
        createdRanking,
      ]);

      setNewRankingName("");
    } catch {
      setError("No se pudo crear el ranking.");
    }
  }

  return (
    <section>
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm uppercase tracking-widest text-blue-300">
          Rankings personales
        </p>

        <h1 className="text-5xl font-bold text-white">
          Bienvenido a MisTop
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Organiza tus películas y series favoritas, consulta tus rankings y
          filtra el contenido según su estado.
        </p>
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-700 bg-white/10 p-5 shadow-lg">
          <p className="text-sm text-slate-300">Total</p>
          <p className="text-3xl font-bold">{total}</p>
        </div>

        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 shadow-lg">
          <p className="text-sm text-blue-200">Películas</p>
          <p className="text-3xl font-bold">{movies}</p>
        </div>

        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/10 p-5 shadow-lg">
          <p className="text-sm text-purple-200">Series</p>
          <p className="text-3xl font-bold">{series}</p>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 shadow-lg">
          <p className="text-sm text-emerald-200">Terminadas</p>
          <p className="text-3xl font-bold">{completed}</p>
        </div>
      </div>

      <div className="mb-10 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-xl">
        <h2 className="mb-4 text-2xl font-bold text-white">
          Rankings
        </h2>

        <form
          onSubmit={handleCreateRanking}
          className="mb-6 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="text"
            value={newRankingName}
            onChange={(event) => setNewRankingName(event.target.value)}
            placeholder="Nuevo ranking"
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Crear
          </button>
        </form>

        {loading && (
          <p className="text-slate-300">Cargando rankings...</p>
        )}

        {error && (
          <p className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-200">
            {error}
          </p>
        )}

        {!loading && !error && (
          <ul className="space-y-3">
            {rankings.map((ranking) => (
              <li
                key={ranking.id}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                {ranking.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link
          to="/peliculas"
          className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-8 shadow-xl transition hover:-translate-y-1 hover:bg-blue-500/20"
        >
          <h2 className="text-2xl font-bold text-blue-200">
            Ver películas
          </h2>
          <p className="mt-3 text-slate-300">
            Consulta el ranking de películas guardadas en la aplicación.
          </p>
        </Link>

        <Link
          to="/series"
          className="rounded-3xl border border-purple-500/30 bg-purple-500/10 p-8 shadow-xl transition hover:-translate-y-1 hover:bg-purple-500/20"
        >
          <h2 className="text-2xl font-bold text-purple-200">
            Ver series
          </h2>
          <p className="mt-3 text-slate-300">
            Consulta el ranking de series guardadas en la aplicación.
          </p>
        </Link>
      </div>
    </section>
  );
}