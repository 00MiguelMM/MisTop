import { AddItemForm } from "./components/AddItemForm";
import { RankingList } from "./components/RankingList";
import type { RankingItem } from "./types/ranking";

const exampleItems: RankingItem[] = [
  {
    id: "1",
    title: "Interstellar",
    description: "Una película de ciencia ficción sobre el espacio, el tiempo y la familia.",
    category: "peliculas",
    score: 9.5,
  },
  {
    id: "2",
    title: "Breaking Bad",
    description: "Una serie intensa sobre decisiones, ambición y consecuencias.",
    category: "series",
    score: 9.8,
  },
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-10">
        <header className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-blue-300">
            Rankings personales
          </p>

          <h1 className="text-5xl font-bold">
            MisTop
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Organiza tus películas y series favoritas en rankings visuales,
            sencillos y fáciles de comparar.
          </p>
        </header>

        <AddItemForm />

        <section className="mt-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Ranking destacado
          </h2>

          <RankingList items={exampleItems} />
        </section>
      </section>
    </main>
  );
}

export default App;