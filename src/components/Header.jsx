import { useEffect, useState } from "react";

const NAV = ["About", "Services", "Projects", "Experience", "Contact"];

export default function Header({ activeSection, scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (item) => {
    scrollTo(item.toLowerCase());
    setOpen(false);
  };

  return (
    <header
      className={`anim-nav fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-[#0a0910]/95 border-b border-white/6 shadow-xl shadow-black/50 py-3"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo("home")}
          className="text-xl font-bold tracking-tight text-white"
        >
          <span className="grad-text">N.</span>Nabi
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item}
              onClick={() => go(item)}
              className={`nav-line text-sm font-semibold transition-colors duration-200
                ${
                  activeSection === item.toLowerCase()
                    ? "active text-white"
                    : "text-white/50 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("Contact")}
            className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold text-white grad-btn shadow-lg shadow-purple-500/25"
          >
            Hire me ✦
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="mx-4 mt-3 mb-1 rounded-2xl px-5 py-4 flex flex-col gap-3 bg-[#0f0d1a] border border-white/6">
          {NAV.map((item) => (
            <li key={item}>
              <button
                onClick={() => go(item)}
                className="text-sm font-semibold w-full text-left py-1 text-white/70 hover:text-white transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mt-4"/>
    </header>
  );
}
