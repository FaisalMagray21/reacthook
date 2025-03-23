import React from "react";
//import { ThemeContext } from "../Context/ThemeContext";
import { ThemeContextcreate } from "../Context/ThemeContext";
import { useContext } from "react";
function Theme() {
  const { theme, toggleTheme } = useContext(ThemeContextcreate);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Current Theme: {theme}</h1>

      <button
        onClick={toggleTheme}
        className="px-6 py-3 text-lg font-semibold rounded-lg shadow-md 
                  transition-all duration-300 ease-in-out
                  bg-blue-500 text-white hover:bg-blue-700 
                  dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-600"
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Theme;
