import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      className={clsx(
        "px-6 pt-28 pb-20 min-h-screen flex justify-center items-center",
        theme === "light" && "bg-purple-50 text-gray-900",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="max-w-xl w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/originals/14/62/6e/14626ea5ba8753c802288b536a667b0e.jpg"
            alt="Designer Cartoon"
            className="w-full rounded-l-4xl shadow-xl inset-shadow-indigo-500"
          />
        </div>
        <div className="w-full md:w-1/2 text-justify">

        <h2
        className={clsx(
          "text-left text-5xl font-bold mb-12",
          theme === "light" && "text-gray-900",
          theme === "dark" && "text-white"
        )}
      >
        Beyond the Interface
      </h2>
          <p
            className={clsx(
              "mb-4 text-lg",
              theme === "light" && "text-gray-700",
              theme === "dark" && "text-gray-300"
            )}
          >
            Hi, I'm <span className="font-semibold">Nusratun Nabi</span> — a{" "}
            <span className="font-semibold">
              UI/UX Designer & UX Researcher
            </span>{" "}
            with a strong foundation in{" "}
            <span className="font-semibold">
              Computer Science & Engineering
            </span>{" "}
            from the International Islamic University Chittagong.
          </p>

          <p
            className={clsx(
              "mb-4 text-lg",
              theme === "light" && "text-gray-700",
              theme === "dark" && "text-gray-300"
            )}
          >
            I have professional experience working with multiple companies
            including <span className="font-semibold">Patricius IT</span> and{" "}
            <span className="font-semibold">iCrew Technologies</span>. Over the
            last few years, I've designed and delivered{" "}
            <span className="font-semibold">
              scalable, user-centered digital solutions
            </span>{" "}
            across diverse industries.
          </p>

          <p
            className={clsx(
              "mb-6 text-lg",
              theme === "light" && "text-gray-700",
              theme === "dark" && "text-gray-300"
            )}
          >
            I specialize in:
            <br />–{" "}
            <span className="font-semibold">
              Web Applications & Dashboards
            </span>{" "}
            (role-based systems, admin panels, healthcare platforms)
            <br />– <span className="font-semibold">Websites</span> (responsive,
            conversion-focused e-commerce & travel platforms)
            <br />– <span className="font-semibold">Mobile Apps</span> (clean,
            intuitive app design with modular design systems)
          </p>

          {/* Stats */}
          <div className="flex flex-col items-start sm:flex-row gap-8 mb-6 ">
            <div>
              <p
                className={clsx(
                  "text-4xl font-bold",
                  theme === "light" && "text-purple-600",
                  theme === "dark" && "text-pink-400"
                )}
              >
                1.5+
              </p>
              <p
                className={clsx(
                  "text-sm uppercase tracking-wide",
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-400"
                )}
              >
                Years Experience
              </p>
            </div>
            <div>
              <p
                className={clsx(
                  "text-4xl font-bold",
                  theme === "light" && "text-purple-600",
                  theme === "dark" && "text-pink-400"
                )}
              >
                5+
              </p>
              <p
                className={clsx(
                  "text-sm uppercase tracking-wide",
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-400"
                )}
              >
                Major Projects
              </p>
            </div>
            <div>
              <p
                className={clsx(
                  "text-4xl font-bold",
                  theme === "light" && "text-purple-600",
                  theme === "dark" && "text-pink-400"
                )}
              >
                Global
              </p>
              <p
                className={clsx(
                  "text-sm uppercase tracking-wide",
                  theme === "light" && "text-gray-600",
                  theme === "dark" && "text-gray-400"
                )}
              >
                Remote Teams
              </p>
            </div>
          </div>

          {/* Quote */}
          <blockquote
            className={clsx(
              "border-l-4  pl-4 italic text-xl md:text-2xl",
              theme === "light" && "text-gray-600 border-purple-600",
              theme === "dark" && "text-gray-300 border-pink-400"
            )}
          >
            "Design isn't just what it looks like. It's how it works — and how
            it makes you feel."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
