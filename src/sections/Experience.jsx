import { useState, useRef } from "react";
import useInView from "../hooks/useInView";

const EXPERIENCES = [
  {
    id: 1,
    jobTitle: "UI/UX Engineer",
    company: "Patricius IT",
    jobType: "Full-time",
    duration: "Mar 2025 – Aug 2025 · 6 months",
    location: "Chattogram, Bangladesh · On-site",
    description: "Currently working as a UI/UX Engineer, focusing on advanced design systems and user experience optimization.",
    expandedContent: "Key Responsibilities: Leading design system development, conducting user research, creating high-fidelity prototypes, and collaborating with development teams to ensure pixel-perfect implementation.",
    skills: [],
  },
  {
    id: 2,
    jobTitle: "Associate UI/UX Designer",
    company: "iCrew Technologies",
    jobType: "Full-time",
    duration: "Nov 2024 – May 2025 · 7 months",
    location: "Chattogram, Bangladesh",
    description: "My role involved user research, wireframing, prototyping, and visual design to create user-friendly interfaces. I collaborated closely with developers and product teams.",
    expandedContent: null,
    skills: ["Research", "User Personas", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    id: 3,
    jobTitle: "UI/UX Designer (Intern)",
    company: "iCrew Technologies",
    jobType: "Internship",
    duration: "Jul 2024 – Oct 2024 · 4 months",
    location: "Remote",
    description: "Enhanced UI/UX fundamentals by working on live projects. Built strong communication channels with the team leader and developer team. Completed three key projects, honing project management and time efficiency skills.",
    expandedContent: null,
    skills: [],
  },
];

const STATS = [
  { label: "Total Experience", value: "1.5+ Yrs"   },
  { label: "Companies",        value: "2"           },
  { label: "Positions",        value: "3"           },
  { label: "Location",         value: "Chattogram"  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(new Set());
  const ref = useRef(null);
  const visible = useInView(ref, 0.08);

  const toggle = (id) =>
    setExpanded((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  return (
    <section id="experience" className="py-28 px-6 bg-[#07070d]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-linear-to-r from-purple-500 to-indigo-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Career</span>
            <span className="w-8 h-px bg-linear-to-l from-purple-500 to-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Professional <span className="grad-text">Experience</span>
          </h2>
          <p className="mt-3 text-base text-white/40">UI/UX Design Journey</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Sticky stats */}
          <div className={`md:sticky top-24 w-full md:w-60 shrink-0 rounded-2xl p-6 glass border-purple-500/10 shadow-lg
            transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-sm font-bold text-center mb-5 text-purple-400">Career Stats</p>
            <div className="space-y-4">
              {STATS.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-center text-sm border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="text-white/40">{label}</span>
                  <span className="font-bold text-orange-400">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative flex-1 pl-8">
            <div className="absolute left-2.5 top-2 bottom-2 w-0.5 tl-line rounded-full opacity-30" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => {
                const isExp = expanded.has(exp.id);
                return (
                  <div key={exp.id}
                    className={`relative transition-all duration-700
                      ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                    style={{ transitionDelay: `${i * 120}ms` }}>

                    {/* Dot */}
                    <div className="absolute -left-8 top-8 w-6 h-6 rounded-full flex items-center justify-center z-10
                      bg-purple-900/40 ring-2 ring-purple-400/30">
                      <span className="w-2 h-2 rounded-full bg-purple-400 pulse-ring" />
                    </div>


                    {/* Card */}
                    <div
                      onClick={() => exp.expandedContent && toggle(exp.id)}
                      className={`animated-border rounded-2xl p-7 bg-[#0f0d1a]
                        transition-all duration-300
                        ${exp.expandedContent ? "cursor-pointer hover:bg-[#131024]" : ""}`}>

                      <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                        <div>
                          <h3 className="font-bold text-lg text-white">{exp.jobTitle}</h3>
                          <p className="font-semibold text-sm mt-0.5 text-purple-400">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs font-bold text-white grad-btn shadow-sm">
                          {exp.jobType}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-5 text-xs mb-4 text-white/35">
                        <span>📅 {exp.duration}</span>
                        <span>📍 {exp.location}</span>
                      </div>

                      <p className="text-sm leading-relaxed mb-4 text-white/50">{exp.description}</p>

                      {exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exp.skills.map((s) => (
                            <span key={s}
                              className="px-3 py-1 rounded-full text-xs font-semibold glass text-blue-300 border-blue-500/20">
                              {s}
                            </span>
                          ))}
                        </div>
                      )}

                      {exp.expandedContent && (
                        <button className="text-xs font-semibold px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-200">
                          {isExp ? "Hide Details ↑" : "View Key Responsibilities ↓"}
                        </button>
                      )}

                      {isExp && exp.expandedContent && (
                        <div className="anim-expand-in mt-4 p-4 rounded-xl text-sm leading-relaxed
                          bg-purple-900/20 border border-purple-500/20 text-purple-200">
                          {exp.expandedContent}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}