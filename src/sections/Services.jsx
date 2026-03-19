import { useRef } from "react";
import useInView from "../hooks/useInView";

const SERVICES = [
  { icon: "🔍", title: "UX Research",               desc: "User interviews, journey mapping, usability testing and research synthesis.",                       iconBg: "from-rose-500 to-pink-500",       glow: "rgba(244,63,94,0.3)"   },
  { icon: "🎨", title: "UI Design",                 desc: "High fidelity design systems, mobile/web UI and visual storytelling.",                              iconBg: "from-purple-500 to-violet-500",   glow: "rgba(139,92,246,0.3)"  },
  { icon: "📊", title: "Dashboards & Systems",      desc: "Complex interface design with clarity, for scalable products and data-driven tools.",                iconBg: "from-indigo-500 to-blue-500",     glow: "rgba(99,102,241,0.3)"  },
  { icon: "⚙️", title: "Prototyping",               desc: "Interactive prototypes for web and mobile, enabling rapid iteration and user feedback.",             iconBg: "from-violet-500 to-fuchsia-500",  glow: "rgba(167,139,250,0.3)" },
  { icon: "🔎", title: "Design Audit",              desc: "In-depth review of your product's usability, accessibility, and visual consistency.",               iconBg: "from-sky-500 to-cyan-500",        glow: "rgba(14,165,233,0.3)"  },
  { icon: "✨", title: "Branding & Visual Identity", desc: "Logo design, color palettes, typography, and brand guidelines for a cohesive memorable presence.",  iconBg: "from-fuchsia-500 to-purple-500",  glow: "rgba(217,70,239,0.3)"  },
];

export default function Services() {
  const ref = useRef(null);
  const visible = useInView(ref, 0.1);

  return (
    <section id="services" className="py-28 px-6 bg-[#07070d]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-linear-to-r from-purple-500 to-indigo-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">What I do</span>
            <span className="w-8 h-px bg-linear-to-l from-purple-500 to-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            How I <span className="grad-text">Help You</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon, title, desc, iconBg, glow }, i) => (
            <div key={title}
              className={`group relative rounded-2xl p-7 overflow-hidden
                bg-white/3 backdrop-blur-md border border-white/6
                hover:border-white/12transition-all duration-300
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: "0 0 0 transparent",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 40px ${glow}`}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 transparent"}
            >
              {/* Subtle top gradient shine */}
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

              {/* Icon box */}
              <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${iconBg} flex items-center justify-center text-xl mb-5 shadow-lg`}
                style={{ boxShadow: `0 4px 20px ${glow}` }}>
                {icon}
              </div>

              <h3 className="text-base font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{desc}</p>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${glow}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}