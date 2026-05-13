export function AddItemForm() {
  return (
    <form className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Añadir nuevo elemento
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Título"
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400"
        />

        <select className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white">
          <option>peliculas</option>
          <option>series</option>
        </select>

        <textarea
          placeholder="Descripción"
          className="rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-400 md:col-span-2"
        />

        <input
          type="number"
          placeholder="Puntuación"
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