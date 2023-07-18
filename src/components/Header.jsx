import React from "react";
import { FaRegMoon } from "react-icons/fa";
const Header = () => {
  return (
    <div className=" shadow-lg">
      <div className=" container mx-auto p-5 flex flex-row justify-between items-center text-[#111517]">
        <h1 className="text-xl md:text-3xl font-bold">Where in the world ?</h1>
        <div className=" flex items-center gap-3">
          <FaRegMoon />
          <p className=" font-semibold">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
