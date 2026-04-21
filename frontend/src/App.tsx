import { useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const añadir = () => {
    if (!input) return;
    setItems([...items, input]);
    setInput("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>MisTop</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Añadir elemento"
      />

      <button onClick={añadir}>Añadir</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;