export function AddItemForm() {
  return (
    <form className="bg-white rounded-xl shadow-md p-6 mb-6 flex flex-col gap-4">
      
      <h2 className="text-xl font-semibold">
        Añadir elemento
      </h2>

      <input
        type="text"
        placeholder="Título"
        className="border rounded-lg p-2"
      />

      <textarea
        placeholder="Descripción"
        className="border rounded-lg p-2"
      />

      <select className="border rounded-lg p-2">
        <option>peliculas</option>
        <option>series</option>
        <option>restaurantes</option>
        <option>lugares</option>
      </select>

      <input
        type="number"
        placeholder="Puntuación"
        className="border rounded-lg p-2"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
      >
        Añadir
      </button>

    </form>
  );
}