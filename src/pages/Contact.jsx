import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen",
        theme === "light" && "bg-white text-gray-900",
        theme === "dark" && "bg-gray-900 text-white"
      )}
    >
      <h2
        className={clsx(
          "text-3xl font-bold text-center mb-8",
          "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
        )}
      >
        Let's Build Something Meaningful
      </h2>

      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className={clsx(
              "w-full p-4 rounded border transition-colors",
              theme === "light" &&
                "border-gray-300 bg-white text-gray-900 focus:border-purple-500",
              theme === "dark" &&
                "border-gray-600 bg-gray-800 text-white focus:border-purple-400"
            )}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className={clsx(
              "w-full p-4 rounded border transition-colors",
              theme === "light" &&
                "border-gray-300 bg-white text-gray-900 focus:border-purple-500",
              theme === "dark" &&
                "border-gray-600 bg-gray-800 text-white focus:border-purple-400"
            )}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className={clsx(
              "w-full p-4 rounded border h-32 transition-colors resize-vertical",
              theme === "light" &&
                "border-gray-300 bg-white text-gray-900 focus:border-purple-500",
              theme === "dark" &&
                "border-gray-600 bg-gray-800 text-white focus:border-purple-400"
            )}
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors font-medium"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://linkedin.com/in/nusratun-nabi-a295131b4"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-4 rounded-lg border transition-colors hover:shadow-lg",
                theme === "light" &&
                  "border-gray-200 bg-gray-50 hover:bg-gray-100",
                theme === "dark" &&
                  "border-gray-600 bg-gray-800 hover:bg-gray-700"
              )}
            >
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold">LinkedIn</div>
            </a>

            <a
              href="https://behance.net/nusratunnabi"
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "p-4 rounded-lg border transition-colors hover:shadow-lg",
                theme === "light" &&
                  "border-gray-200 bg-gray-50 hover:bg-gray-100",
                theme === "dark" &&
                  "border-gray-600 bg-gray-800 hover:bg-gray-700"
              )}
            >
              <div className="text-2xl mb-2">🎨</div>
              <div className="font-semibold">Behance</div>
            </a>

            <a
              href="mailto:nusraat.uiux@gmail.com"
              className={clsx(
                "p-4 rounded-lg border transition-colors hover:shadow-lg",
                theme === "light" &&
                  "border-gray-200 bg-gray-50 hover:bg-gray-100",
                theme === "dark" &&
                  "border-gray-600 bg-gray-800 hover:bg-gray-700"
              )}
            >
              <div className="text-2xl mb-2">📧</div>
              <div className="font-semibold">Email</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
