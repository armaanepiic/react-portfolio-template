import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Services() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen flex flex-col md:flex-col items-center justify-center",
        theme === "light" && "bg-white text-gray-900",
        theme === "dark" && "bg-gray-900 text-white"
      )}
    >
      <h2
        className={clsx(
          "text-3xl lg:text-5xl font-bold text-center mb-12",
          "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
        )}
      >
        How I Help You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* UX Research */}
        <div
          className={clsx(
            "p-6 border rounded-lg transition-all duration-300",
            "hover:scale-105 transform hover:shadow-xl",
            theme === "light"
              ? "border-gray-200 bg-white hover:bg-gradient-to-br hover:from-rose-50 hover:via-pink-50 hover:to-purple-100"
              : "border-gray-600 bg-gray-800 hover:bg-gradient-to-br hover:from-rose-900/20 hover:via-pink-900/20 hover:to-purple-900/20"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">UX Research</h3>
          <p
            className={clsx(
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            User interviews, journey mapping, usability testing and research
            synthesis.
          </p>
        </div>

        {/* UI Design */}
        <div
          className={clsx(
            "p-6 border rounded-lg transition-all duration-300",
            "hover:scale-105 transform hover:shadow-xl",
            theme === "light"
              ? "border-gray-200 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:via-violet-50 hover:to-indigo-100"
              : "border-gray-600 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-900/20 hover:via-violet-900/20 hover:to-indigo-900/20"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">UI Design</h3>
          <p
            className={clsx(
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            High fidelity design systems, mobile/web UI and visual storytelling.
          </p>
        </div>

        {/* Dashboards & Systems */}
        <div
          className={clsx(
            "p-6 border rounded-lg transition-all duration-300",
            "hover:scale-105 transform hover:shadow-xl",
            theme === "light"
              ? "border-gray-200 bg-white hover:bg-gradient-to-br hover:from-indigo-50 hover:via-blue-50 hover:to-cyan-100"
              : "border-gray-600 bg-gray-800 hover:bg-gradient-to-br hover:from-indigo-900/20 hover:via-blue-900/20 hover:to-cyan-900/20"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">Dashboards & Systems</h3>
          <p
            className={clsx(
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Complex interface design with clarity, for scalable products and
            data-driven tools.
          </p>
        </div>

        {/* Prototyping */}
        <div
          className={clsx(
            "p-6 border rounded-lg transition-all duration-300",
            "hover:scale-105 transform hover:shadow-xl",
            theme === "light"
              ? "border-gray-200 bg-white hover:bg-gradient-to-br hover:from-violet-50 hover:via-fuchsia-50 hover:to-pink-100"
              : "border-gray-600 bg-gray-800 hover:bg-gradient-to-br hover:from-violet-900/20 hover:via-fuchsia-900/20 hover:to-pink-900/20"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
          <p
            className={clsx(
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Interactive prototypes for web and mobile, enabling rapid iteration
            and user feedback before development.
          </p>
        </div>

        {/* Design Audit */}
        <div
          className={clsx(
            "p-6 border rounded-lg transition-all duration-300",
            "hover:scale-105 transform hover:shadow-xl",
            theme === "light"
              ? "border-gray-200 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:via-sky-50 hover:to-indigo-100"
              : "border-gray-600 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-900/20 hover:via-sky-900/20 hover:to-indigo-900/20"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">Design Audit</h3>
          <p
            className={clsx(
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            In-depth review of your product’s usability, accessibility, and
            visual consistency to identify improvement areas.
          </p>
        </div>

        {/* Branding & Visual Identity */}
        <div
          className={clsx(
            "p-6 border rounded-lg transition-all duration-300",
            "hover:scale-105 transform hover:shadow-xl",
            theme === "light"
              ? "border-gray-200 bg-white hover:bg-gradient-to-br hover:from-fuchsia-50 hover:via-purple-50 hover:to-violet-100"
              : "border-gray-600 bg-gray-800 hover:bg-gradient-to-br hover:from-fuchsia-900/20 hover:via-purple-900/20 hover:to-violet-900/20"
          )}
        >
          <h3 className="text-xl font-semibold mb-2">
            Branding & Visual Identity
          </h3>
          <p
            className={clsx(
              theme === "light" && "text-gray-600",
              theme === "dark" && "text-gray-300"
            )}
          >
            Logo design, color palettes, typography, and brand guidelines to
            ensure a cohesive and memorable presence.
          </p>
        </div>
      </div>
    </section>
  );
}
