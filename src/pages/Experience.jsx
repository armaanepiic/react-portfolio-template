import React, { useState, useRef } from "react";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Experience() {
  const { theme } = useTheme();
  const [expandedCards, setExpandedCards] = useState(new Set());
  // Show all cards by default so nothing is hidden on reload
  const experiences = [
    {
      id: 1,
      jobTitle: "UI/UX Engineer",
      company: "Patricius IT",
      jobType: "Full-time",
      duration: "Mar 2025 - Aug 2025 • 6 months",
      location: "Chattogram, Bangladesh • On-site",
      description:
        "Currently working as a UI/UX Engineer, focusing on advanced design systems and user experience optimization.",
      skills: [],
      achievement: null,
      expandedContent:
        "Key Responsibilities: Leading design system development, conducting user research, creating high-fidelity prototypes, and collaborating with development teams to ensure pixel-perfect implementation.",
    },
    {
      id: 2,
      jobTitle: "Associate UI/UX Designer",
      company: "iCrew Technologies",
      jobType: "Full-time",
      duration: "Nov 2024 - May 2025 • 7 months",
      location: "Chattogram, Bangladesh",
      description:
        "As an Associate UI/UX Designer at iCrew Technologies, my role involves user research, wireframing, prototyping, and visual design to create user-friendly interfaces. I collaborate closely with developers and product teams.",
      skills: [
        "Research",
        "User Personas",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      achievement: null, // removed certificate
    },
    {
      id: 3,
      jobTitle: "UI/UX Designer (Intern)",
      company: "iCrew Technologies",
      jobType: "Internship",
      duration: "Jul 2024 - Oct 2024 • 4 months",
      location: "Remote",
      description: [
        "Enhanced UI/UX fundamentals and practical skills by working on live projects and applying design principles effectively.",
        "Built strong communication channels with the team leader and developer team, aligning designs with technical needs.",
        "Completed three key projects, honing project management and time efficiency skills.",
      ].join(" "),
      skills: [],
      achievement: null,
    },
  ];

  const stats = [
    { label: "Total Experience:", value: "1.5+ Years" },
    { label: "Companies:", value: "2" },
    { label: "Positions:", value: "3" },
    { label: "Current Location:", value: "Chattogram" },
    // { label: "Background:", value: "Computer Science and Engineering, IIUC" },
  ];

  // Always show all cards (no intersection observer)
  const [visibleCards] = useState(new Set(experiences.map((e) => e.id)));
  const [statsVisible] = useState(true);

  const cardsRef = useRef([]);

  const toggleCard = (cardId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(cardId)) {
        newSet.delete(cardId);
      } else {
        newSet.add(cardId);
      }
      return newSet;
    });
  };

  const ExperienceCard = ({ experience, index }) => {
    const isVisible = visibleCards.has(experience.id);
    const isExpanded = expandedCards.has(experience.id);

    return (
      <div
        ref={(el) => (cardsRef.current[index] = el)}
        data-card-id={experience.id}
        className={clsx(
          "relative bg-opacity-80 rounded-2xl p-8 mb-12 border transition-all duration-500 cursor-pointer group",
          isVisible ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0",
          theme === "light"
            ? "bg-white border-gray-200 shadow-lg hover:bg-purple-50"
            : "bg-gray-800 border-gray-700 shadow-lg hover:bg-gray-700",
          "w-full md:w-[650px] mx-auto",
          "hover:scale-[1.025] hover:shadow-2xl"
        )}
        onClick={() => toggleCard(experience.id)}
      >
        <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
          <div>
            <div
              className={clsx(
                "font-bold text-lg",
                theme === "light" ? "text-gray-900" : "text-white"
              )}
            >
              {experience.jobTitle}
            </div>
            <div className="text-purple-500 font-semibold">
              {experience.company}
            </div>
          </div>
          <div className="job-type px-3 py-1 rounded-full text-xs font-semibold uppercase bg-gradient-to-r from-purple-400 to-purple-600 text-white">
            {experience.jobType}
          </div>
        </div>
        {(experience.duration || experience.location) && (
          <div
            className={clsx(
              "flex flex-wrap gap-6 mb-4 text-sm",
              theme === "light" ? "text-gray-500" : "text-gray-400"
            )}
          >
            {experience.duration && (
              <div className="flex items-center gap-1">
                <span role="img" aria-label="calendar">
                  📅
                </span>
                {experience.duration}
              </div>
            )}
            {experience.location && (
              <div className="flex items-center gap-1">
                <span role="img" aria-label="location">
                  📍
                </span>
                {experience.location}
              </div>
            )}
          </div>
        )}
        <div
          className={clsx(
            "mb-3",
            theme === "light" ? "text-gray-700" : "text-gray-300"
          )}
        >
          {experience.description}
        </div>
        {experience.expandedContent && (
          <button
            className={clsx(
              "expand-btn border rounded-full px-4 py-1 text-xs font-medium transition group-hover:bg-purple-100 group-hover:text-purple-700",
              theme === "light"
                ? "border-purple-300 text-purple-700 hover:bg-purple-50"
                : "border-purple-700 text-purple-200 hover:bg-purple-900"
            )}
            type="button"
          >
            {isExpanded ? "Hide Details" : "View Key Responsibilities"}
          </button>
        )}
        {isExpanded && experience.expandedContent && (
          <div
            className={clsx(
              "expanded-content mt-4 p-4 rounded-lg border animate-fade-in",
              theme === "light"
                ? "bg-purple-50 border-purple-100 text-purple-900"
                : "bg-purple-900/30 border-purple-700 text-purple-100"
            )}
          >
            {experience.expandedContent}
          </div>
        )}
        {experience.skills && experience.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={clsx(
                  "skill-tag px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 hover:bg-blue-100",
                  theme === "light"
                    ? "bg-blue-100 text-blue-600 border-blue-200"
                    : "bg-blue-900/30 text-blue-300 border-blue-800 hover:bg-blue-800"
                )}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
        {experience.achievement && (
          <div
            className={clsx(
              "achievement flex items-center gap-2 mt-4 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105",
              theme === "light"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-yellow-900/30 text-yellow-200"
            )}
          >
            <span className="text-lg">{experience.achievement.icon}</span>
            <span>{experience.achievement.text}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen transition-colors duration-300",
        theme === "light"
          ? "bg-gray-50 text-gray-900"
          : "bg-gray-900 text-white"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={clsx(
              "text-4xl md:text-5xl font-extrabold mb-4 tracking-tight",
              "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
            )}
          >
            Professional Experience
          </h2>
          <p
            className={clsx(
              "max-w-2xl mx-auto text-lg md:text-xl",
              theme === "light" ? "text-gray-600" : "text-gray-300"
            )}
          >
            UI/UX Design Journey
          </p>
        </div>
        {/* Flex container for Stats and Experience */}
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Sticky Stats */}
          <div
            className={clsx(
              "z-20 rounded-xl shadow-lg p-6 min-w-[250px] max-w-xs mx-auto mb-12 md:mb-0 transition-all duration-500",
              "md:sticky",
              theme === "light"
                ? "bg-white border border-purple-100 text-gray-900"
                : "bg-gray-800 border border-purple-900 text-white",
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
            style={{ top: "6.5rem" }} // ~104px, adjust as needed for your header height
          >
            <h3 className="text-lg font-semibold mb-3 text-purple-600 text-center">
              Career Stats
            </h3>
            {stats.map((stat, idx) => (
              <div key={idx} className="flex justify-between mb-1 text-sm">
                <span>{stat.label}</span>
                <span className="font-bold text-orange-500">{stat.value}</span>
              </div>
            ))}
          </div>
          {/* Timeline */}
          <div className="relative pl-12 flex-1">
            {/* Timeline vertical line */}
            <div
              className={clsx(
                "absolute left-[22px] top-0 bottom-0 w-[2px] rounded-full z-10",
                theme === "light"
                  ? "bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.4)]"
                  : "bg-gradient-to-b from-purple-800 via-purple-700 to-purple-600 shadow-[0_0_8px_rgba(168,85,247,0.2)]"
              )}
            />
            <div className="relative z-20">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative">
                  {/* Enhanced circle indicator with ring */}
                  <div
                    className={clsx(
                      "absolute -left-[46px] top-8 flex items-center justify-center",
                      "w-[36px] h-[36px] rounded-full z-30",
                      "ring-4 ring-opacity-20",
                      theme === "light"
                        ? "bg-gradient-to-br from-purple-100 to-white shadow-lg ring-purple-500"
                        : "bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg ring-purple-400"
                    )}
                  >
                    <span
                      className={clsx(
                        "w-2.5 h-2.5 rounded-full",
                        "animate-pulse",
                        theme === "light"
                          ? "bg-gradient-to-r from-purple-500 to-purple-600 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                          : "bg-gradient-to-r from-purple-600 to-purple-700 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                      )}
                    />
                  </div>
                  <ExperienceCard experience={experience} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Animation for fade-in */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s;
        }
      `}</style>
    </section>
  );
}
