import { useContext, useEffect} from "react";
import Card from "../components/Card";
import LoopIcon from "@mui/icons-material/Loop";
import Search from "../components/Search";
import { AppContext } from "../context/AppContext";
export const LandingPage = () => {
  // Datos extraidos del AppContext a traves del useContext
  const { paises, isLoading, filtro, busqueda, setBusqueda, setFiltro } = useContext(AppContext);
  // Cada vez que se actualiza la pagina se actualizan los valores por defecto. Se vacia el buscador
  // y se vuelve a la opción por defecto del filtro
  useEffect(() => {
    setFiltro("def");
    setBusqueda("");
  }, [])
  
  return (
    <>
      <Search />
      <div className="flex m-auto justify-center dark:bg-[#202c37]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[25px]">
            {/* Se evalua si se está cargando el array de paises
              En ese caso, se muestra el spin. En caso contrario no se muestra */}
          {
            isLoading ? (
              <div className="flex justify-center items-center mt-[500%]">
              <LoopIcon className="w-[50rem] animate-spin " />
              </div>
            ):
            (
              <></>
            )
          }
            {/* Si está cargado el array y el filtro está en el valor por defecto
                En ese caso, se evalua si el buscador está vacio:
                  Se filtra el array de paises por si incluyen lo escrito en el input, y mostrarse 
                  Caso contrario, se muestran los paises en el orden en el que están en paises (alfabético)
                En el caso de que el filtro no esté en valor por defecto, se filtra por región y se muestra     
            */}
          {
          !isLoading && (filtro === "def" || filtro === "") ? (
             !isLoading && busqueda != "" ? (
              paises.filter(pais => pais.name.toLowerCase().includes(busqueda.toLowerCase()))
              .map((pais) => <Card {...pais}/>)) 
              : 
              (paises.map((pais, key) => <Card key={key} {...pais} />))) 
            : ((paises.filter(pais => pais.region === filtro).map(pais => <Card {...pais}/>)))
          }
        </div>
      </div>
    </>
  );
};
