import React, { useEffect, useState } from "react";
import Base from "../layouts/BaseLayout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const welcomeText = t("welcome");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(welcomeText.slice(0, index));
      index++;
      if (index > welcomeText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [welcomeText]);

  const isRTL = i18n.language === "fa";

  return (
    <Base title="Home">
      <div className="text-center" style={{ direction: isRTL ? "rtl" : "ltr" }}>
        <h1
          className="text-4xl font-bold text-gray-700 dark:text-gray-300 mb-4 font-[Lalezar]"
          style={{ minHeight: "56px" }}
        >
          {displayedText}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-[Vazirmatn]">
          {t("desc_Part1")}
          <br />
          <span>{t("desc_Part2")}</span>
        </p>
        <div className="flex justify-center space-x-4 font-[Lalezar] text-gray-100 mt-8">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            {t("btn_login")}
          </button>
          <Link
            to={"/auth/register"}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            {t("btn_register")}
          </Link>
        </div>
      </div>
    </Base>
  );
};

export default Home;
