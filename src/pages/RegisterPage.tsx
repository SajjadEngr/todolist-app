import React, { useState } from "react";

import Auth from "../layouts/AuthLayout";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password: string) => {
    const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(String(password));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error(t("email_format_error"));
      return;
    }

    if (!validatePassword(formData.password)) {
      toast.error(t("password_format_error"));
      return;
    }

    setLoading(true);

    toast.success(t("login_success_alert"));

    setLoading(false);
  };

  return (
    <>
      <Auth title="Register">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-300 font-[Lalezar]">
          {t("register_display")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 font-[Vazirmatn]">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              {t("email_label")}
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              style={{ direction: isRTL ? "rtl" : "ltr" }}
            >
              {t("password_label")}
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-3 py-2 text-gray-600 dark:text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full font-[Lalezar] px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" />
                {isRegister ? t("register_display") : t("login_display")}
              </div>
            ) : isRegister ? (
              t("register_display")
            ) : (
              t("login_display")
            )}
          </button>
        </form>
        <ToastContainer className={"font-[Vazirmatn] font-bold"} />
        <p
          className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 font-bold"
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          {isRegister ? t("already_register_text") : t("no_account_text")} {""}
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            {t("already_register_link")}
          </button>
        </p>
      </Auth>
    </>
  );
};

export default AuthPage;
