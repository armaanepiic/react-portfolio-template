const TOOLS = ["Figma","FigJam","Framer","Maze","Principle","Zeplin","Hotjar","Lottie","Storybook","Linear","Notion","React"];

export default function Footer({ scrollTo }) {
  return (
    <footer className="bg-[#07070d]">
      <div className="overflow-hidden py-4 border-y border-white/5">
        <div className="anim-marquee whitespace-nowrap inline-flex gap-10">
          {[...TOOLS, ...TOOLS].map((t, i) => (
            <span key={i} className="text-xs font-bold uppercase tracking-widest text-white/15">
              {t} ✦
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <button onClick={() => scrollTo("home")}
            className="text-xl font-bold tracking-tight text-white">
            <span className="grad-text">N.</span>Nabi
          </button>

          <div className="flex gap-6">
            {[
              { label: "Behance",  href: "https://behance.net/nusratunnabi" },
              { label: "LinkedIn", href: "https://linkedin.com/in/nusratun-nabi-a295131b4" },
              { label: "Email",    href: "mailto:nusraat.uiux@gmail.com" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                className="text-sm font-medium text-white/30 hover:text-white/70 transition-colors">
                {s.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Nusratun Nabi · Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}