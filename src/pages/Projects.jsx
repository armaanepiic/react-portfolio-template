import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { project } from "./project-info";

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen",
        theme === "light" && "bg-gray-50 text-gray-900",
        theme === "dark" && "bg-gray-900 text-white"
      )}
    >
      <div className="max-w-6xl mx-auto space-y-16 mt-7">
        {project.map((projectItem, index) => (
          <div
            key={projectItem.id}
            className={clsx(
              "flex flex-col lg:flex-row gap-8 lg:gap-12 items-center",
              // Alternate layout direction for desktop
              index % 2 === 1 && "lg:flex-row-reverse"
            )}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div
                className={clsx(
                  "relative overflow-hidden transition-transform hover:scale-105",
                  "bg-white/5 backdrop-blur-sm",
                  "border-2 p-4 md:p-6", // Added padding
                  theme === "light"
                    ? "border-gray-200 shadow-xl"
                    : "border-gray-700 shadow-purple-500/20",
                  // Different border radius based on position
                  projectItem.id % 2 === 1 ? "rounded-l-4xl" : "rounded-r-4xl",
                  // Fixed aspect ratio container
                  "aspect-[16/10]"
                )}
              >
                <img
                  src={projectItem.image}
                  className={clsx(
                    "w-full h-full",
                    "object-center transition-all duration-300",
                    "rounded-lg", // Added rounded corners to image
                    // Adjust object-fit based on image content
                    projectItem.id === 4
                      ? "object-contain p-2" // Added inner padding for contained images
                      : "object-center p-2",
                    "hover:scale-105"
                  )}
                  alt={projectItem.title}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3
                className={clsx(
                  "text-2xl md:text-3xl font-bold",
                  theme === "light" && "text-gray-800",
                  theme === "dark" && "text-white"
                )}
              >
                {projectItem.title}
              </h3>

              <p
                className={clsx(
                  "text-base md:text-lg leading-relaxed",
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-300"
                )}
              >
                {projectItem.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {projectItem.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={clsx(
                      "px-3 py-1 text-xs md:text-sm rounded-full",
                      theme === "light" && "bg-blue-100 text-blue-600",
                      theme === "dark" && "bg-blue-900/30 text-blue-300"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href={projectItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:translate-x-1",
                    theme === "light" &&
                      "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/25",
                    theme === "dark" &&
                      "bg-orange-500 hover:bg-orange-400 text-white shadow-lg hover:shadow-orange-500/25"
                  )}
                >
                  EXPLORE CASE STUDY
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
