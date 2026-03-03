import { useState, useEffect } from "react";

const WORDS = ["UI/UX Designer", "UX Researcher", "Product Thinker", "Visual Storyteller"];

function useTypewriter(words, speed = 100, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    const delay = del ? speed / 2 : cIdx === word.length ? pause : speed;
    const t = setTimeout(() => {
      if (!del && cIdx < word.length)        { setDisplay(word.slice(0, cIdx + 1)); setCIdx((c) => c + 1); }
      else if (!del && cIdx === word.length) { setDel(true); }
      else if (del && cIdx > 0)             { setDisplay(word.slice(0, cIdx - 1)); setCIdx((c) => c - 1); }
      else                                  { setDel(false); setWIdx((i) => (i + 1) % words.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [cIdx, del, wIdx, words, speed, pause]);
  return display;
}

export default function Hero({ scrollTo }) {
  const typed = useTypewriter(WORDS);

  return (
    <section id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 bg-linear-to-br from-[#0a0a0f] via-[#0f0a1a] to-[#0a0a0f]">

      <div className="absolute -top-20 -left-20 w-96 h-96 blob blur-3xl opacity-25 anim-float bg-purple-700 pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 blob blur-3xl opacity-15 anim-float bg-indigo-600 pointer-events-none"
        style={{ animationDelay: "2s" }} />

      <div className="absolute top-24 right-12 md:right-28 w-52 h-52 rounded-full border border-white/5 anim-spin-slow pointer-events-none" />
      <div className="absolute top-28 right-16 md:right-32 w-36 h-36 rounded-full border border-purple-500/10 pointer-events-none anim-spin-slow"
        style={{ animationDirection: "reverse", animationDuration: "8s" }} />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-8 anim-fade-up glass text-purple-300 border-purple-500/20"
          style={{ animationDelay: "0.1s" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-ring" />
          Available for freelance · 2026
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-5 text-white anim-fade-up"
          style={{ animationDelay: "0.2s" }}>
          Revolutionize Your
          <br />
          <span className="grad-text">Design Experience</span>
        </h1>

        <div className="text-xl md:text-2xl font-light mb-3 h-9 text-white/50 anim-fade-up"
          style={{ animationDelay: "0.3s" }}>
          {typed}
          <span className="cursor-blink text-purple-400 ml-0.5">|</span>
        </div>

        <p className="text-base md:text-lg italic mb-10 text-white/35 anim-fade-up"
          style={{ animationDelay: "0.4s" }}>
          Designing with purpose. Building with empathy.
        </p>

        <div className="flex flex-wrap gap-4 anim-fade-up" style={{ animationDelay: "0.5s" }}>
          <button onClick={() => scrollTo("projects")}
            className="grad-btn px-8 py-4 rounded-full text-sm font-semibold text-white shadow-lg shadow-purple-500/30">
            View Projects
          </button>
          <a href="https://www.linkedin.com/in/nusratun-nabi-a295131b4/" target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full text-sm font-semibold border-2 border-white/15 text-white/70 hover:border-white/30 hover:text-white transition-all duration-300 hover:-translate-y-0.5">
            LinkedIn ↗
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 anim-fade-up" style={{ animationDelay: "0.65s" }}>
          {[
            { icon: "🔍", title: "Research-Driven", desc: "User journeys, interviews, and UX strategy that uncover clarity." },
            { icon: "🎨", title: "Pixel Perfect",    desc: "Interfaces crafted with attention to hierarchy, typography, and usability." },
            { icon: "⚡", title: "Scalable Design",  desc: "Design systems and dashboards that adapt to business growth." },
          ].map(({ icon, title, desc }) => (
            <div key={title}
              className="card-lift rounded-2xl p-6 glass hover:border-purple-500/25 transition-colors duration-300">
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-base font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-float text-white/20">
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect x="1" y="1" width="12" height="20" rx="6" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="5.5" y="5" width="3" height="5" rx="1.5" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
}