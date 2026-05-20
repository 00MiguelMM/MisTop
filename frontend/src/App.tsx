import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import { SeriesPage } from "./pages/SeriesPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
            <h1 className="text-3xl font-bold text-white">
              MisTop
            </h1>

            <nav className="flex gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`
                }
              >
                Inicio
              </NavLink>

              <NavLink
                to="/peliculas"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`
                }
              >
                Películas
              </NavLink>

              <NavLink
                to="/series"
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-purple-600 text-white"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`
                }
              >
                Series
              </NavLink>
            </nav>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/peliculas" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;