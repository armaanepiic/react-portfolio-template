import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const menuItems = ["Services", "About", "Projects", "Resume", "Contact"];
  const menuItem = menuItems.map((item, index) => (
    <li key={index}>
      <button
        onClick={() => {
          navigate(`/${item.toLocaleLowerCase()}`);
        }}
        className={clsx(
          "px-4 py-2 rounded-l-lg cursor-pointer hover:scale-105 font-semibold",
          theme === "light" &&
            "hover:bg-opacity-80 hover:bg-purple-800 transition-all duration-300 border-purple-600 hover:text-white",
          theme === "dark" && "hover:bg-gray-50 hover:text-gray-800"
        )}
      >
        {item}
      </button>
    </li>
  ));
  return (
    <header
      className={clsx(
        "p-4 border-b-2 transition-colors duration-300 fixed top-0 left-0 right-0 z-50 backdrop-blur-md",
        theme === "light" && "bg-white/80 border-gray-200/50 text-gray-800",
        theme === "dark" && "bg-gray-800/80 border-gray-600/50 text-white"
      )}
    >
      <div className="flex justify-between items-center w-full mx-auto">
        <Link to="/">
          <h1 className="text-2xl font-bold">Nusratun Nabi</h1>
        </Link>

        {/* navbar */}
        <nav>
          <ul className="flex space-x-8">{menuItem}</ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* <span className="">Welcome, Guest</span> */}
          <button
            onClick={toggleTheme}
            className={clsx(
              "px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer",
              theme === "light" && "bg-gray-800 text-white hover:bg-gray-700",
              theme === "dark" && "bg-white text-gray-800 hover:bg-gray-100"
            )}
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </header>
  );
}
// 🌙 Dark, ☀️ Light
