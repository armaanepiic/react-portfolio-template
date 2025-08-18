import clsx from "clsx";
import useTheme from "../hooks/useTheme";

export default function Projects() {
  const { theme } = useTheme();

  const projects = [
    {
      title: "SynCare – Healthcare App",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/27b9b2188965451.65d860a6e4d8c.jpg",
      link: "https://www.behance.net/gallery/188965451/Healthcare-and-Online-Consultancy-(SynCare)",
    },
    {
      title: "QMS Dashboard",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7621e7225300431.675e5aee6d393.jpg",
      link: "https://www.behance.net/gallery/225300431/QMS-(Quality-Management-System)-Dashboard-Design",
    },
    {
      title: "SmartNest – Smart Home",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d61e0f228783939.675e69f65a9d8.jpg",
      link: "https://www.behance.net/gallery/228783939/Smart-Home-Control-Mobile-App-UI-Design",
    },
    {
      title: "Mooncart – E-commerce",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b14b8f214952851.673c8a6f1e947.jpg",
      link: "https://www.behance.net/gallery/228758371/E-commerce-Landing-Page-Design",
    },
    {
      title: "Green Lifestyle Services",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9d8de7231209285.675e6e919ce57.jpg",
      link: "https://www.behance.net/gallery/231209285/Green-lifestyle-services",
    },
    {
      title: "Catalog Design",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bd4b6d228746757.675e729b23f0d.jpg",
      link: "https://www.behance.net/gallery/228746757/Catalog-design",
    },
  ];

  return (
    <section
      className={clsx(
        "px-6 py-20 min-h-screen",
        theme === "light" && "bg-gray-100 text-gray-900",
        theme === "dark" && "bg-gray-800 text-white"
      )}
    >
      <h2
        className={clsx(
          "text-3xl font-bold text-center mb-12",
          "bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent"
        )}
      >
        Proof Over Promises
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className={clsx(
              "project-card p-6 border rounded-lg transition-transform hover:transform hover:-translate-y-1.5 hover:shadow-xl",
              theme === "light" && "bg-white border-gray-200",
              theme === "dark" && "bg-gray-900 border-gray-600"
            )}
          >
            <img
              src={project.image}
              className="mb-4 rounded w-full h-48 object-cover"
              alt={project.title}
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm underline text-purple-600 hover:text-purple-800"
            >
              View Case Study
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
