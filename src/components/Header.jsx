import React from "react";
import { FaRegMoon } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className=" container mx-auto p-5 flex justify-between items-center shadow-lg">
        <h1 className=" text-3xl font-bold">Where in the world ?</h1>
        <div className=" flex items-center gap-3">
          <FaRegMoon />
          <p className=" font-semibold">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
