import { useRef } from "react";
import useInView from "../hooks/useInView";

export default function About() {
  const ref = useRef(null);
  const visible = useInView(ref, 0.15);

  return (
    <section id="about" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div ref={ref}
          className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/40">
                <img
                  src="https://i.pinimg.com/originals/14/62/6e/14626ea5ba8753c802288b536a667b0e.jpg"
                  alt="Nusratun Nabi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-7 -right-5 px-4 py-2 rounded-2xl text-xs font-bold shadow-lg anim-float glass text-purple-300"
                style={{ animationDelay: "0.8s" }}>
                ✦ UI/UX Designer
              </div>
              <div className="absolute -bottom-7 -left-5 px-4 py-2 rounded-2xl text-xs font-bold shadow-lg anim-float glass text-indigo-300"
                style={{ animationDelay: "1.8s" }}>
                ✦ UX Researcher
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-linear-to-r from-purple-500 to-indigo-400" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-400">About me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-white">
              Beyond the
              <br />
              <span className="grad-text">Interface</span>
            </h2>

            <p className="text-lg leading-relaxed mb-4 text-white/50">
              Hi, I'm <strong className="text-white/80">Nusratun Nabi</strong> — a{" "}
              <strong className="text-white/80">UI/UX Designer & UX Researcher</strong> with a strong foundation in{" "}
              <strong className="text-white/80">Computer Science & Engineering</strong> from the International Islamic University Chittagong.
            </p>
            <p className="text-base leading-relaxed mb-4 text-white/40">
              I have professional experience working with{" "}
              <strong className="text-white/60">Patricius IT</strong> and{" "}
              <strong className="text-white/60">iCrew Technologies</strong>. I've designed and delivered{" "}
              <strong className="text-white/60">scalable, user-centered digital solutions</strong> across diverse industries.
            </p>
            <p className="text-base leading-relaxed mb-8 text-white/40">
              I specialize in <strong className="text-white/60">Web Applications & Dashboards</strong>,{" "}
              <strong className="text-white/60">Responsive Websites</strong>, and{" "}
              <strong className="text-white/60">Mobile Apps</strong> — with modular design systems at each layer.
            </p>

            <div className="flex flex-wrap gap-8 mb-8">
              {[["1.5+", "Years Experience"], ["5+", "Major Projects"], ["Global", "Remote Teams"]].map(([n, l]) => (
                <div key={l}>
                  <p className="text-3xl font-extrabold text-purple-400">{n}</p>
                  <p className="text-xs uppercase tracking-wide mt-0.5 text-white/30">{l}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-purple-500 pl-5 italic text-base leading-relaxed text-white/40">
              "Design isn't just what it looks like. It's how it works — and how it makes you feel."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}