import { useMemo, useState } from "react";
import { AddItemForm } from "./components/AddItemForm";
import { RankingList } from "./components/RankingList";
import type { RankingItem, RankingStatus } from "./types/ranking";

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

function App() {
  const [items, setItems] = useState<RankingItem[]>(initialItems);

const [search, setSearch] = useState("");

const [statusFilter, setStatusFilter] =
  useState<"todas" | RankingStatus>("todas");

const [activeTab, setActiveTab] =
  useState<"peliculas" | "series">("peliculas");

  function handleAddItem(newItem: RankingItem) {
    setItems([...items, newItem]);
  }

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "todas" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [items, search, statusFilter]);

  const stats = useMemo(() => {
    const total = items.length;
    const terminadas = items.filter((item) => item.status === "terminada").length;
    const viendo = items.filter((item) => item.status === "viendo").length;
    const pendientes = items.filter((item) => item.status === "pendiente").length;

    return { total, terminadas, viendo, pendientes };
  }, [items]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-blue-300">
            Rankings personales
          </p>

          <h1 className="text-5xl font-bold">MisTop</h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Organiza tus películas y series favoritas en rankings visuales,
            sencillos y fáciles de comparar.
          </p>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-700 bg-white/10 p-5 shadow-lg backdrop-blur">
            <p className="text-sm text-slate-300">Total</p>
            <p className="text-3xl font-bold">{stats.total}</p>
          </div>

          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 shadow-lg">
            <p className="text-sm text-emerald-200">Terminadas</p>
            <p className="text-3xl font-bold">{stats.terminadas}</p>
          </div>

          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5 shadow-lg">
            <p className="text-sm text-blue-200">Viendo</p>
            <p className="text-3xl font-bold">{stats.viendo}</p>
          </div>

          <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5 shadow-lg">
            <p className="text-sm text-yellow-200">Pendientes</p>
            <p className="text-3xl font-bold">{stats.pendientes}</p>
          </div>
        </section>

        <AddItemForm onAddItem={handleAddItem} />

        <section className="mt-8 rounded-3xl border border-slate-700 bg-slate-950/60 p-6 shadow-xl">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ranking destacado</h2>
              <p className="text-sm text-slate-400">
                Filtra tus películas y series según su estado.
              </p>
            </div>

            <input
              type="text"
              placeholder="Buscar por título..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
            />
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            <button
              onClick={() => setStatusFilter("todas")}
              className="rounded-full bg-slate-800 px-4 py-2 text-sm font-medium hover:bg-slate-700"
            >
              Todas
            </button>

            <button
              onClick={() => setStatusFilter("terminada")}
              className="rounded-full bg-emerald-600/20 px-4 py-2 text-sm font-medium text-emerald-200 hover:bg-emerald-600/30"
            >
              Terminadas
            </button>

            <button
              onClick={() => setStatusFilter("viendo")}
              className="rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-200 hover:bg-blue-600/30"
            >
              Viendo
            </button>

            <button
              onClick={() => setStatusFilter("pendiente")}
              className="rounded-full bg-yellow-600/20 px-4 py-2 text-sm font-medium text-yellow-200 hover:bg-yellow-600/30"
            >
              Pendientes
            </button>
          </div>

          <div className="mb-6 flex gap-3">
            <button
              onClick={() => setActiveTab("peliculas")}
              className={`rounded-full px-5 py-2 font-medium transition ${
                activeTab === "peliculas"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300"
              }`}
  >
              Películas
            </button>

            <button
              onClick={() => setActiveTab("series")}
              className={`rounded-full px-5 py-2 font-medium transition ${
                activeTab === "series"
                  ? "bg-purple-600 text-white"
                  : "bg-slate-800 text-slate-300"
              }`}
            >
              Series
            </button>
          </div>

          <RankingList
            items={filteredItems.filter(
              (item) => item.category === activeTab
            )}
          />
        </section>
      </section>
    </main>
  );
}

export default App;