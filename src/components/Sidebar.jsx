import clsx from "clsx";
import useTheme from "../hooks/useTheme";
import { useNavigate } from "react-router";

export default function Sidebar() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const menuItems = ["Dashboard", "Profile", "Settings", "Help"];
  const menuItem = menuItems.map((item, index) => (
    <li key={index}>
      <button
        onClick={() => {
          navigate(`/${item.toLocaleLowerCase()}`);
        }}
        className={clsx(
          "w-full text-left p-2 rounded hover:bg-opacity-80 transition-color duration-200 cursor-pointer hover:scale-105 font-semibold",
          theme === "light" && "hover:bg-gray-800 hover:text-gray-50",
          theme === "dark" && "hover:bg-gray-50 hover:text-gray-800"
        )}
      >
        {item}
      </button>
    </li>
  ));
  //   console.log(menuItem);
  return (
    <aside
      className={clsx(
        "w-64 p-4 transition-colors duration-300",
        theme === "light" && "bg-gray-50 text-gray-800",
        theme === "dark" && "bg-gray-700 text-white"
      )}
    >
      <nav>
        <h2 className="text-lg font-semibold mb-2">Menu</h2>
        <ul className="space-y-2">{menuItem}</ul>
      </nav>
    </aside>
  );
}
