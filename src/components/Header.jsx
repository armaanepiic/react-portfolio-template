import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Services", "About", "Projects", "Experience", "Contact"];

  const handleNavigation = (item) => {
    navigate(`/${item.toLowerCase()}`);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const menuItem = menuItems.map((item, index) => (
    <li key={index}>
      <button
        onClick={() => handleNavigation(item)}
        className={clsx(
          "text-md md:text-lg px-4 py-2 rounded-lg cursor-pointer hover:scale-105 font-semibold transition-all duration-300",
          theme === "light" && "hover:bg-purple-100 hover:text-purple-800",
          theme === "dark" && "hover:bg-gray-700 hover:text-white"
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
        theme === "light" && "bg-gradient-to-r from-purple-300 via-purple-200 to-blue-300 border-gray-200/50 text-gray-800",
        theme === "dark" && "bg-gray-800/80 border-gray-600/50 text-white"
      )}
    >
      <div className="flex justify-between items-center w-full mx-auto">
        <Link to="/">
          <h1 className="text-md md:text-2xl font-bold font-Helvetica">Nusratun Nabi</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">{menuItem}</ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={clsx("border-2 px-4 py-2 rounded-md transition-transform hover:scale-110 cursor-pointer", theme === "light" && "bg-gray-800",
                  theme === "dark" && "bg-gray-100")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 transition-transform hover:scale-110 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={clsx(
                  "block w-6 h-0.5 transition-all duration-300",
                  theme === "light" ? "bg-gray-800" : "bg-white",
                  isMobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              ></span>
              <span
                className={clsx(
                  "block w-6 h-0.5 mt-1 transition-all duration-300",
                  theme === "light" ? "bg-gray-800" : "bg-white",
                  isMobileMenuOpen && "opacity-0"
                )}
              ></span>
              <span
                className={clsx(
                  "block w-6 h-0.5 mt-1 transition-all duration-300",
                  theme === "light" ? "bg-gray-800" : "bg-white",
                  isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={clsx(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul
          className={clsx(
            "flex flex-col space-y-2 pt-4 pb-2",
            theme === "light" && "bg-white/90",
            theme === "dark" && "bg-gray-800/90"
          )}
        >
          {menuItem}
        </ul>
      </nav>
    </header>
  );
}
// 🌙 Dark, ☀️ Light
