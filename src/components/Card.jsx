// Componente que da forma a la tarjeta que se muestra en la landing.
// Al clickear el <Link> Se le envia la información del pais a traves de la propiedad state de Link, y se muestra
// detalladamente la info del pais. 

import { Link } from "react-router-dom";
const Card = ({ ...pais }) => {
  return (
    <>
      <div
        className="bg-white dark:bg-[#2b3945] w-72 mt-5 rounded-md overflow-hidden drop-shadow-lg mr-6 mb-5 
      transition-all ease-in-out dark:text-[#ffffff]"
      >
        <img src={pais.flag} alt="" className="object-contain" />
        <section className="p-5">
          <h2 className="font-bold text-xl">{pais.name}</h2>
          <section className="mt-3 mb-5">
            <h3 className="font-semibold text-md">
              Population: <span className="font-medium">{pais.population}</span>{" "}
            </h3>
            <h3 className="font-semibold">
              Region: <span className="font-medium">{pais.region}</span>
            </h3>
            <h3 className="font-semibold">
              Capital: <span className="font-medium">{pais.capital}</span>
            </h3>
          </section>
          <Link
            to={`/card/${pais.alpha3Code}`}
            state={pais}
            className=" p-1 rounded-md hover:shadow-sm hover:bg-slate-300"
          >
            Ver mas...
          </Link>
        </section>
      </div>
    </>
  );
};

export default Card;
