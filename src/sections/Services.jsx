import { useRef } from "react";
import useInView from "../hooks/useInView";

const SERVICES = [
  { icon: "🔍", title: "UX Research",               desc: "User interviews, journey mapping, usability testing and research synthesis.",                                              color: "from-rose-500/10 to-pink-500/10",      border: "hover:border-rose-500/30"    },
  { icon: "🎨", title: "UI Design",                 desc: "High fidelity design systems, mobile/web UI and visual storytelling.",                                                    color: "from-purple-500/10 to-violet-500/10",  border: "hover:border-purple-500/30"  },
  { icon: "📊", title: "Dashboards & Systems",      desc: "Complex interface design with clarity, for scalable products and data-driven tools.",                                     color: "from-indigo-500/10 to-blue-500/10",    border: "hover:border-indigo-500/30"  },
  { icon: "⚙️", title: "Prototyping",               desc: "Interactive prototypes for web and mobile, enabling rapid iteration and user feedback before development.",               color: "from-violet-500/10 to-fuchsia-500/10", border: "hover:border-violet-500/30"  },
  { icon: "🔎", title: "Design Audit",              desc: "In-depth review of your product's usability, accessibility, and visual consistency to identify improvement areas.",       color: "from-sky-500/10 to-cyan-500/10",       border: "hover:border-sky-500/30"     },
  { icon: "✨", title: "Branding & Visual Identity", desc: "Logo design, color palettes, typography, and brand guidelines to ensure a cohesive and memorable presence.",             color: "from-fuchsia-500/10 to-purple-500/10", border: "hover:border-fuchsia-500/30" },
];

export default function Services() {
  const ref = useRef(null);
  const visible = useInView(ref, 0.1);

  return (
    <section id="services" className="py-28 px-6 bg-[#07070d]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
          {SERVICES.map(({ icon, title, desc, color, border }, i) => (
            <div key={title}
              className={`card-lift rounded-2xl p-7 border border-white/6 bg-linear-to-r ${color} ${border}
                transition-all duration-500
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="text-base font-bold mb-2 text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/40">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}