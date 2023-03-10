/** 
 * @
 * 
*/

import {useState} from 'react'
const useFetch = () => {
    const path = "https://restcountries.com/v2/all"
    const [isLoading, setIsLoading] = useState(true)
    const [paises, setPaises] = useState([]);

    const fetchAllCountries = async () =>{
        try {
            await fetch(path).then(res => res.json())
            .then(data => {
                setIsLoading(true);
                setPaises([...data]);
            })} catch (error) {console.log(error)}
        setIsLoading(false)
    };


  return {fetchAllCountries, paises, isLoading}
}

export default useFetch