//Header que se encuentra en todas las pantallas

import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const {toggleDarkMode} = useContext(AppContext);

  return (
    <header className="bg-white dark:bg-[#2b3945] border-b border-black">
      <div className="flex justify-between m-auto py-5 w-[95%] md:w-[80%]">
        <h1 className=" font-bold text-lg lg:text-3xl dark:text-white">Where in the world?</h1>
        <button className="mr-3 hover:bg-[#fafafa] transition-all ease-linear flex items-center rounded-md
        dark:text-white dark:hover:bg-[#202c37]
        "
        onClick={toggleDarkMode}
        >
          <DarkModeIcon fontSize="medium"></DarkModeIcon>
          <p className="">Dark Mode</p>
        </button>
      </div>
    </header>
  );
};

export default Header;
