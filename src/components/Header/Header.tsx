import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo / Nome do Site */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-yellow-400">
            Futebol Info
          </NavLink>
        </div>

        {/* Links de Navegação */}
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              }`
            }
            title="Classificação"
          >
            Classificação
          </NavLink>

          <NavLink
            to="/jogos"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              }`
            }
            title="Jogos"
          >
            Jogos
          </NavLink>

          <NavLink
            to="/times"
            className={({ isActive }) =>
              `hover:text-yellow-400 ${
                isActive ? "border-b-2 border-yellow-400" : ""
              }`
            }
            title="Times"
          >
            Times
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
