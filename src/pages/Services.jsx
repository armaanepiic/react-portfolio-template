import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Services() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen flex flex-col md:flex-row items-center justify-center",
        theme === "light" && "bg-white text-gray-900",
        theme === "dark" && "bg-gray-900 text-white"
      )}
    >
      <h2
        className={clsx(
          "text-3xl font-bold text-center mb-12",
          "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
        )}
      >
        How I Help You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          className={clsx(
            "p-6 border rounded-lg hover:shadow-lg transition",
            theme === "light" && "border-gray-200 bg-white",
            theme === "dark" && "border-gray-600 bg-gray-800"
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
        <div
          className={clsx(
            "p-6 border rounded-lg hover:shadow-lg transition",
            theme === "light" && "border-gray-200 bg-white",
            theme === "dark" && "border-gray-600 bg-gray-800"
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
        <div
          className={clsx(
            "p-6 border rounded-lg hover:shadow-lg transition",
            theme === "light" && "border-gray-200 bg-white",
            theme === "dark" && "border-gray-600 bg-gray-800"
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
      </div>
    </section>
  );
}
