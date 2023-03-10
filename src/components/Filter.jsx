// Componente de filtro.
// La opción clickeada se almacena en el state Filtro que se encuentra en el contexto AppContext.

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Filter = () => {
  // Se trae setFiltro del contexto AppContext a traves del useContext
  const { setFiltro } = useContext(AppContext);
  const handleChange = (e) => {
    e.preventDefault();
    setFiltro(e.target.value);
  };
  return (
    <form className="">
      <select
        name="select"
        className="h-[45px] w-[200px] shadow-sm rounded-md p-4 py-2 pl-3 pr-3 mt-1.5
    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm
    dark:bg-[#2b3945]
    "
        defaultValue={""}
        onClick={handleChange}
      >
        <option value="def">Filter by Region..</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default Filter;
