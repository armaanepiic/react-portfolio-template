import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Resume() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen text-center",
        theme === "light" &&
          "bg-gradient-to-r from-purple-50 to-white text-gray-900",
        theme === "dark" &&
          "bg-gradient-to-r from-gray-900 to-gray-800 text-white"
      )}
    >
      <h2
        className={clsx(
          "text-3xl font-bold mb-6",
          "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
        )}
      >
        My Resume
      </h2>
      <p
        className={clsx(
          "max-w-xl mx-auto mb-8 text-lg",
          theme === "light" && "text-gray-600",
          theme === "dark" && "text-gray-300"
        )}
      >
        Download my latest CV to see my detailed work experience, skills, and
        projects.
      </p>

      <div className="mb-12">
        <a
          href="https://drive.google.com/file/d/1D0jq5yiAQTp0llBCcRudw8ng7J3CNnGp/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg"
        >
          📄 Download CV
        </a>
      </div>

      {/* Additional Resume Highlights */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-800 border-gray-600"
            )}
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-600">
              Experience
            </h3>
            <p
              className={clsx(
                theme === "light" && "text-gray-600",
                theme === "dark" && "text-gray-300"
              )}
            >
              UI/UX Designer with expertise in healthcare, smart home, travel,
              and e-commerce platforms
            </p>
          </div>

          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-800 border-gray-600"
            )}
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-600">
              Skills
            </h3>
            <p
              className={clsx(
                theme === "light" && "text-gray-600",
                theme === "dark" && "text-gray-300"
              )}
            >
              Figma, Miro, Canva, HTML/CSS, Webflow, User Research, Design
              Systems
            </p>
          </div>

          <div
            className={clsx(
              "p-6 rounded-lg border",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-800 border-gray-600"
            )}
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-600">
              Background
            </h3>
            <p
              className={clsx(
                theme === "light" && "text-gray-600",
                theme === "dark" && "text-gray-300"
              )}
            >
              Computer Science Engineering background with focus on
              user-centered design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
