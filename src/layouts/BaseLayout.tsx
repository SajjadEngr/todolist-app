import React, { useEffect } from "react";
import { useAtom } from "jotai";
import Toggle from "../components/Toggle";
import { darkModeAtom } from "../store";

const Base: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [darkMode] = useAtom(darkModeAtom);
  useEffect(() => {
    document.title = "ToDo App - " + title;
  }, [title]);
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Toggle />
          {children}
        </div>
      </div>
    </>
  );
};

export default Base;
