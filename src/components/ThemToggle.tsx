import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAtom } from "jotai";
import { darkModeAtom } from "../store";

const ThemToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </>
  );
};

export default ThemToggle;
