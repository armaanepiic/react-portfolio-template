import { useRef } from "react";
import useInView from "../hooks/useInView";
import {
  AestheticLaptopMockup,
  EbookMockup,
  FrameImage,
  PurplePinkGradient,
  PresentationSlideBehance,
  Monocart,
} from "../assets";

const PROJECTS = [
  { id: 1, title: "SynCare – Healthcare App",   description: "Built for healthcare access – from appointments to prescriptions.",                              tags: ["#Healthcare", "#MobileUI", "#Figma"],            image: PresentationSlideBehance, link: "https://www.behance.net/gallery/188965451/Healthcare-and-Online-Consultancy-(SynCare)" },
  { id: 2, title: "QMS Dashboard",              description: "Quality Management System dashboard with comprehensive analytics and monitoring.",                 tags: ["#Dashboard", "#WebDesign", "#Analytics"],        image: FrameImage,               link: "https://www.behance.net/gallery/225300431/QMS-(Quality-Management-System)-Dashboard-Design" },
  { id: 3, title: "SmartNest – Smart Home",     description: "Smart home control interface with intuitive device management.",                                  tags: ["#SmartHome", "#IoT", "#MobileApp"],              image: PurplePinkGradient,       link: "https://www.behance.net/gallery/228783939/Smart-Home-Control-Mobile-App-UI-Design" },
  { id: 4, title: "Monocart – E-commerce",      description: "Eco-friendly e-comm experience with playful visuals and filtered shopping flow.",                 tags: ["#Ecommerce", "#WebDesign", "#ComponentLibrary"], image: Monocart,                 link: "https://www.behance.net/gallery/228758371/E-commerce-Landing-Page-Design" },
  { id: 5, title: "Green Lifestyle Services",   description: "Sustainable lifestyle platform promoting eco-friendly living solutions.",                          tags: ["#Sustainability", "#WebDesign", "#Branding"],    image: AestheticLaptopMockup,   link: "https://www.behance.net/gallery/231209285/Green-lifestyle-services" },
  { id: 6, title: "Catalog Design",             description: "Modern catalog design with clean typography and visual hierarchy.",                                tags: ["#PrintDesign", "#Catalog", "#Typography"],       image: EbookMockup,              link: "https://www.behance.net/gallery/228746757/Catalog-design" },
];

export default function Projects() {
  const ref = useRef(null);
  const visible = useInView(ref, 0.05);

  return (
    <section id="projects" className="py-28 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className={`mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-linear-to-r from-purple-500 to-indigo-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-400">Selected work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects I'm <span className="grad-text">Proud of.</span>
          </h2>
        </div>

        <div className="space-y-20">
          {PROJECTS.map((p, i) => (
            <div key={p.id}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-center
                ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}
                transition-all duration-700
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}>

              <div className="w-full lg:w-1/2 group">
                <div className={`relative overflow-hidden aspect-16/10 p-4 md:p-5 glass
                  hover:border-purple-500/30 shadow-xl shadow-purple-900/20 transition-all duration-300
                  ${p.id % 2 === 1 ? "rounded-l-4xl rounded-tr-4xl" : "rounded-r-4xl rounded-tl-4xl"}`}>
                  <img src={p.image} alt={p.title}
                    className={`w-full h-full rounded-lg transition-transform duration-500 group-hover:scale-105
                      ${p.id === 4 ? "object-contain" : "object-cover object-center"}`}
                    loading="lazy" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-5">
                <p className="text-xs font-bold tracking-widest uppercase text-purple-400">
                  0{p.id} — Case Study
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-white">{p.title}</h3>
                <p className="text-base leading-relaxed text-white/45">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag}
                      className="px-3 py-1 text-xs rounded-full font-semibold glass text-purple-300 border-purple-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white
                    bg-linear-to-r from-orange-500 to-orange-400 shadow-lg shadow-orange-500/25
                    hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300">
                  Explore Case Study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}