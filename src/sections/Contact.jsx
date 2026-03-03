import { useRef } from "react";
import useInView from "../hooks/useInView";

const CONTACT_INFO = [
  { icon: "👋", label: "Name",     value: "Nusratun Nabi",          link: null },
  { icon: "📧", label: "Email",    value: "nusraat.uiux@gmail.com", link: "mailto:nusraat.uiux@gmail.com" },
  { icon: "🔗", label: "LinkedIn", value: "nusratun-nabi",           link: "https://linkedin.com/in/nusratun-nabi-a295131b4" },
  { icon: "🎨", label: "Behance",  value: "nusratunnabi",            link: "https://behance.net/nusratunnabi" },
  { icon: "📍", label: "Location", value: "Dhaka, Bangladesh", link: null },
];

export default function Contact() {
  const ref = useRef(null);
  const visible = useInView(ref, 0.15);

  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <div className={`text-center mb-14 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-linear-to-r from-purple-500 to-indigo-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Contact</span>
            <span className="w-8 h-px bg-linear-to-l from-purple-500 to-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Let's <span className="grad-text">Connect</span>
          </h2>
          <p className="text-base md:text-lg text-white/40">
            Open to freelance projects, full-time roles, and collaborations. I reply within 24 hours.
          </p>
        </div>

        <div className={`rounded-3xl p-2 glass border-purple-500/15
          bg-linear-to-br from-purple-900/20 to-indigo-900/20
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="rounded-2xl p-6 md:p-8 space-y-3">
            {CONTACT_INFO.map((item, i) => (
              <div key={i}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200
                  border border-transparent hover:border-white/6 hover:bg-white/4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 glass">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide mb-0.5 text-white/30">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer"
                      className="font-semibold text-sm text-purple-400 hover:text-purple-300 transition-colors">
                      {item.value} ↗
                    </a>
                  ) : (
                    <p className="font-semibold text-sm text-white/70">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-10 transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="mailto:nusraat.uiux@gmail.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-bold text-base
              grad-btn shadow-xl shadow-purple-500/30">
            Say Hello 👋
          </a>
        </div>
      </div>
    </section>
  );
}