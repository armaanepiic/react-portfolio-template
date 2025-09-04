import clsx from "clsx";
import useTheme from "../hooks/useTheme";


export default function Contact() {
  const { theme } = useTheme();

  const contactInfo = [
    {
      icon: "👋",
      label: "Name",
      value: "Nusratun Nabi",
    },
    {
      icon: "📧",
      label: "Email",
      value: "nusraat.uiux@gmail.com",
      link: "mailto:nusraat.uiux@gmail.com",
    },
    {
      icon: "🔗",
      label: "LinkedIn",
      value: "nusratun-nabi",
      link: "https://linkedin.com/in/nusratun-nabi-a295131b4",
    },
    {
      icon: "🎨",
      label: "Behance",
      value: "nusratunnabi",
      link: "https://behance.net/nusratunnabi",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Chattogram, Bangladesh",
    },
  ];

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen flex flex-col items-center justify-center",
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      )}
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
        Let's Connect
      </h2>
      
      <div className="max-w-2xl w-full mx-auto">
        <div
          className={clsx(
            "border-2 rounded-xl p-8",
            theme === "light"
              ? "border-purple-100 bg-white/50"
              : "border-purple-900/50 bg-gray-800/50"
          )}
        >
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex items-center gap-4 p-4 rounded-lg transition-all hover:scale-[1.02]",
                  theme === "light"
                    ? "bg-gray-50 hover:bg-gray-100"
                    : "bg-gray-800/50 hover:bg-gray-700/50"
                )}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div
                    className={clsx(
                      "text-sm",
                      theme === "light" ? "text-gray-600" : "text-gray-400"
                    )}
                  >
                    {item.label}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx(
                        "font-medium hover:underline",
                        theme === "light" ? "text-purple-600" : "text-purple-400"
                      )}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
//                   