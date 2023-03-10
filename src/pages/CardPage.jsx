// Página donde se muestra la información detallada de cada pais

import { Link, useLocation } from "react-router-dom";
import UndoRoundedIcon from "@mui/icons-material/UndoRounded";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export const CardPage = () => {
  // Los paises provenientes del array entero.
  const { paises } = useContext(AppContext);
  // Use location se utiliza para obtener información proveniente de la propiedad state que viene con el link
  const { state } = useLocation();

  return (
    // Se muestra lo contenido en el state.
    <>
      <section
        className="my-8 bg-white dark:bg-[#2b3945] w-28 p-1 flex items-center justify-center
      transition-all ease-linear hover:bg-slate-300 text-sm "
      >
        <UndoRoundedIcon />
        <Link to="/"> Landing </Link>
      </section>

      <div className="flex justify-center items-center ">
        <div className=" h-3/4 flex flex-col lg:flex-row justify-between">
          <div className=" md:w-[50%] flex justify-center m-auto items-center ">
            <img src={state.flag} className="object-contain"></img>
          </div>
          <section className="flex flex-col m-auto lg:w-[50%] p-6">
            <h1 className=" font-bold w-5 text-[35px] mb-4">{state.name}</h1>
            <div className="flex flex-col lg:flex-row">
              <ul className="mr-40">
                <li className="flex flex-row mb-1">
                  <h3 className=" font-[600] mr-1">Native Name:</h3>
                  <p className="font-[300]">{state.nativeName}</p>
                </li>
                <li className="flex flex-row mb-1" >
                  <h3 className=" font-[600]">Population:</h3>
                  <p className="font-[300]">{state.population}</p>
                </li>
                <li className="flex flex-row mb-1">
                  <h3 className=" font-[600] mr-1">Region:</h3>
                  <p className="font-[300]">{state.region}</p>
                </li>
                <li className="flex flex-row mb-1">
                  <h3 className=" font-[600] mr-1">Sub Region:</h3>
                  <p className="font-[300]">{state.subregion}</p>
                </li>
                <li className="flex flex-row mb-1">
                  <h3 className=" font-[600] mr-1">Capital:</h3>
                  <p className="font-[300]">{state.capital}</p>
                </li>
              </ul>
              <ul>
                <li className="flex flex-row">
                  <h3 className=" font-[600]">Top Level Domain:</h3>
                  <p className="font-[300]">{state.tld}</p>
                </li>
                <li>
                  <h3 className=" font-[600]">Currencies:</h3>
                  <p className="font-[300]">
                    {state.currencies === undefined ? (
                      <>No currencie.</>
                    ) : (
                      state.currencies
                        .filter((currencie) => currencie)
                        .map((currencie) => (
                          <>
                            {currencie.name} ({currencie.symbol})
                          </>
                        ))
                    )}
                  </p>
                </li>
                <li>
                  <h3 className=" font-[600]">Lenguages:</h3>
                  <p className="font-[300]">
                    {state.languages.map((leng) => (
                      <>{leng.name} </>
                    ))}
                  </p>
                </li>
              </ul>
            </div>
            <section className="mt-12 flex flex-wrap md:flex-row items-center  ">
              <h1 className="font-[600] mr-7">Border Countries :</h1>
              {state.borders === undefined ? (
                <>No borders</>
              ) : (
                //  Se compara los borders (alpha3Code) con los alpha3Code del array de paises
                //   Si existe, se mapea y se crea por cada border un Link que recibe por state la información
                //   pertinente
                state.borders
                  .filter((border) => border)
                  .map((border) =>
                    paises.map((pais, key) =>
                      pais.alpha3Code === border ? (
                        <div className=" dark:bg-[#2b3945] 
                        rounded-md shadow-md border-black border-1 p-2 text-sm mr-3 mt-2 mb-2">
                          <Link
                            to={`/card/${pais.alpha3Code}`}
                            key={key}
                            state={pais}
                          >
                            {pais.name}
                          </Link>
                        </div>
                      ) : (
                        <></>
                      )
                    )
                  )
              )}
            </section>
          </section>
        </div>
      </div>
    </>
  );
};
