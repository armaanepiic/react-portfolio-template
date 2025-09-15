// Theme provider
// A wrapper component that manages the actual theme state using useState

import { useEffect, useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import { useSearchParams } from "react-router";

// Contains the toggle logic to switch between "light" and "dark" themes
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [searchParamas, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ ...searchParamas, mode: theme });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // ThemeContext.Provider make the theme state and toggle function available to all child components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
