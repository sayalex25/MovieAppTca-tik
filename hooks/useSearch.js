import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';

// Custom Hook para solicitar al api la info de las películasque el cliente ha escrito en el buscador
export const useSearch = (query) => {

    const [stateSearch, setStateSearch] = useState([])

    {/* Función asincrona para hacer las solicitudes al api, manejar las promesas 
            y actualizar los estados de las variables */}
    const getFilm = async () => {

        const multiSearchPromise = movieDB.get(`/search/multi?query=${query.name}`);

        const resps = await Promise.all([multiSearchPromise])

        setStateSearch(resps[0].data.results)

    }

    useEffect(() => {
        getFilm();

    }, [query])

    {/* retornamos la respuesta del api, con las películas o seríes que se encuentran en la DBA
            que hacen match con búsqueda */}
    return {
        stateSearch
    }

}
