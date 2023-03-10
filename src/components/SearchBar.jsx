//Componente que maneja el estado de la barra de busqueda

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SearchBar = () => {
  // Se utiliza la función setBusqueda que proviene del contexto AppContext
  const { setBusqueda } = useContext(AppContext);
  // Función que cambia el estado de busqueda a medida que se va escribiendo en el input
  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
  };
  return (
    <div className="flex items-center justify-between mb-5 md:mb-0">
      <label className="relative block w-100 h-[40px]">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </svg>
        </span>
        <input
          type="text"
          id="searchBar"
          className=" h-[45px] w-[350px] shadow-sm rounded-md p-4
        placeholder:text-gray-400 block border border-gray-300 py-2 pl-9 pr-3 
         focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
         dark:bg-[#2b3945] dark:placeholder:text-white
        "
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default SearchBar;
