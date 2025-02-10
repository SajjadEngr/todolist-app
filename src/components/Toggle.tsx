import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAtom } from "jotai";

import i18n from "../i18n/i18n";
import { darkModeAtom, languageAtom } from "../store";

const Toggle: React.FC = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [language, setLanguage] = useAtom(languageAtom);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
    i18n.changeLanguage(language);
  };

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-16 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <button
        onClick={toggleLanguage}
        className="absolute top-4 right-4 p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none"
      >
        {language === "en" ? "FA" : "EN"}
      </button>
    </>
  );
};

export default Toggle;
