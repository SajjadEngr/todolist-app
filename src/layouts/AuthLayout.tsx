import { useAtom } from "jotai";
import { useEffect } from "react";
import Toggle from "../components/Toggle";
import { darkModeAtom } from "../store";

const Auth: React.FC<{
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
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded shadow-md">
            <Toggle />
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
