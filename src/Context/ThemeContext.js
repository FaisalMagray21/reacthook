import { React, createContext } from "react";
import { useState } from "react";

const ThemeContextcreate = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContextcreate.Provider value={{ theme, setTheme, toggleTheme }}>
      <div
        className={
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        }
      >
        {" "}
        {children}{" "}
      </div>{" "}
    </ThemeContextcreate.Provider>
  );
}

export { ThemeContext, ThemeContextcreate };
