import { Link } from "react-router";
import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "min-h-screen flex flex-col justify-center items-center px-6 text-center w-full h-screen",
        theme === "light" &&
          "bg-gradient-to-br from-purple-100 via-purple-200 to-blue-100 text-gray-900",
        theme === "dark" &&
          "bg-gradient-to-br from-purple-900 via-purple-800 to-gray-900 text-white"
      )}
    >
      <div className="relative z-10 max-w-4xl mx-auto ">
        <h1
          className={clsx(
            "text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent",
            theme === "light" && "bg-gradient-to-r from-gray-500 to-gray-900",
            theme === "dark" && "text-white"
          )}
        >
          Revolutionize Your <br />
          <span
            className={clsx(
              "bg-clip-text text-transparent",
              theme === "light" &&
                "bg-gradient-to-r from-purple-600 to-orange-600",
              theme === "dark" &&
                "bg-gradient-to-r from-red-400 via-yellow-300 to-lime-500"
            )}
          >
            Design Experience
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-4">
          UI/UX Designer & UX Researcher based in Bangladesh
        </p>
        <p
          className={clsx(
            "text-base md:text-lg italic mb-8",
            theme === "light" && "text-gray-600",
            theme === "dark" && "text-gray-200"
          )}
        >
          Designing with purpose. Building with empathy.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
          <Link
            to="/projects"
            className={clsx(
              "px-6 py-3 border-2 rounded-lg transition-all duration-300 font-medium",
              theme === "light" &&
                "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
              theme === "dark" &&
                "border-white text-white hover:bg-white hover:text-purple-700"
            )}
          >
            View Projects
          </Link>
          <Link
            to="https://www.linkedin.com/in/nusratun-nabi-a295131b4/"
            className="px-6 py-3  text-white rounded-lg bg-purple-600 hover:bg-purple-800 transition-all duration-300 border-purple-600 font-medium border-2 "
          >
            LinkedIn
          </Link>
        </div>

        {/* features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          <div
            className={clsx(
              "p-6 rounded-lg shadow backdrop-blur-md border transition-all duration-300 hover:scale-105",
              theme === "light" && "bg-white/20 border-white/30",
              theme === "dark" && "bg-white/10 border-white/20"
            )}
          >
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Research-Driven</h3>
            <p
              className={clsx(
                "text-sm",
                theme === "light" && "text-gray-700",
                theme === "dark" && "text-gray-50"
              )}
            >
              User journeys, interviews, and UX strategy that uncover clarity.
            </p>
          </div>
          <div
            className={clsx(
              "p-6 rounded-lg shadow backdrop-blur-md border transition-all duration-300 hover:scale-105",
              theme === "light" && "bg-white/20 border-white/30",
              theme === "dark" && "bg-white/10 border-white/20"
            )}
          >
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Pixel Perfect</h3>
            <p
              className={clsx(
                "text-sm",
                theme === "light" && "text-gray-700",
                theme === "dark" && "text-gray-300"
              )}
            >
              Interfaces crafted with attention to hierarchy, typography, and
              usability.
            </p>
          </div>
          <div
            className={clsx(
              "p-6 rounded-lg shadow backdrop-blur-md border transition-all duration-300 hover:scale-105",
              theme === "light" && "bg-white/20 border-white/30",
              theme === "dark" && "bg-white/10 border-white/20"
            )}
          >
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Scalable Design</h3>
            <p
              className={clsx(
                "text-sm",
                theme === "light" && "text-gray-700",
                theme === "dark" && "text-gray-300"
              )}
            >
              Design systems and dashboards that adapt to business growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
