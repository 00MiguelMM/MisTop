import { RankingList } from "./components/RankingList";
import type { RankingItem } from "./types/ranking";
import { AddItemForm } from "./components/AddItemForm";

const exampleItems: RankingItem[] = [
  {
    id: "1",
    title: "Interstellar",
    description: "Película de ciencia ficción sobre el espacio y el tiempo.",
    category: "peliculas",
    score: 9.5,
  },
  {
    id: "2",
    title: "Breaking Bad",
    description: "Serie sobre un profesor convertido en narcotraficante.",
    category: "series",
    score: 9.8,
  },
];

function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">MisTop</h1>
      <AddItemForm />

      <RankingList items={exampleItems} />
    </main>
  );
}

export default App;