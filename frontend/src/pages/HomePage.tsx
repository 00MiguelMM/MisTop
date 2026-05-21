import { Link } from "react-router-dom";
import { useRankingsContext } from "../context/RankingContext";

export function HomePage() {
  const { items } = useRankingsContext();

  const total = items.length;
  const movies = items.filter((item) => item.category === "peliculas").length;
  const series = items.filter((item) => item.category === "series").length;
  const completed = items.filter((item) => item.status === "terminada").length;

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