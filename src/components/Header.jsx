import React, { useEffect } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
const Header = ({ darkMode, setDarkMode }) => {
  const localStorageDarkMode = localStorage.getItem("theme");
  const changeDarkMode = () => {
    if (localStorageDarkMode === "light") {
      setDarkMode(!darkMode);
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    } else {
      setDarkMode(!darkMode);
      localStorage.setItem("theme", "light");
      window.document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    if (localStorageDarkMode === "light") {
      setDarkMode(true);
      window.document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(false);
      window.document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <div className=" shadow-lg">
      <div className=" container mx-auto p-5 flex flex-row justify-between items-center text-[#111517] dark:text-white ">
        <h1 className="text-xl md:text-3xl font-bold">Where in the world ?</h1>
        <div
          onClick={() => changeDarkMode()}
          className="flex items-center gap-3 cursor-pointer font-semibold"
        >
          {darkMode ? (
            <>
              <FaRegMoon /> <span>Dark Mode</span>
            </>
          ) : (
            <>
              <FaRegSun /> <span>Light Mode</span>
            </>
          )}
          {/* {darkMode ? <FaRegSun /> : <FaRegMoon />}
          <p className=" font-semibold "> {darkMode ? "Light" : "Dark"} Mode</p> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
