import { createContext, useEffect, useState } from "react";
import useFetch from "../useFetch.js";
// Nombre del contexto
export const AppContext = createContext();

// Lo que engloba el contexto
export function AppContextProvider(props) {
  const { fetchAllCountries, paises, isLoading } = useFetch();

  // Se ejecuta fetchAllCountries para que haga la petición una vez que se inicie la Aplicación
  useEffect(() => {
    fetchAllCountries();
  }, []);

  // Los estados del filtro y de la barra de búsqueda
  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  
  // Cambiar a tema oscuro en Tailwind.
  const toggleDarkMode = () =>{
    let elemento = document.body;
    document.documentElement.classList.toggle("dark");
    elemento.classList.toggle("dark-mode");
  };

  return (
    // Los componentes hijos pueden acceder a los siguientes valores
    <AppContext.Provider
      value={{ paises, isLoading, filtro, setFiltro, busqueda, setBusqueda, toggleDarkMode }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
