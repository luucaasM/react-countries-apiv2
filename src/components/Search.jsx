// Componente que junta el Buscador con el Filtro

import React from 'react'
import Filter from './Filter'
import SearchBar from './SearchBar'

const Search = () => {
  return (
    <div className=" mt-5 flex flex-col justify-start md:flex-row md:justify-between items-center">
        <SearchBar />
        <Filter />
    </div>
  )
}

export default Search