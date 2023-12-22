import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';

// Custom Hook para solicitar al api la info las series, en las secciones airingToday, onTheAir, popular y topRated
export const useSeries = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ seriesState, setSeriesState ] = useState({
        airingToday: [],
        onTheAir: [],
        popular: [],
        topRated: [],
    })

    {/* Función asincrona para hacer las solicitudes al api, manejar las promesas 
            y actualizar los estados de las variables */}
    const getSeries = async () => {
        
        const airingTodayPromise = movieDB.get('/tv/airing_today');
        const onTheAirPromise    = movieDB.get('/tv/on_the_air');
        const popularPromise   = movieDB.get('/tv/popular');
        const topRatedPromise   = movieDB.get('/tv/top_rated');

        {/* Asigansmos al arreglo resps[] el resultado del manejo de las promesas recibidas
                con las respuestas al api*/}
        const resps = await Promise.all([ 
            airingTodayPromise,
            onTheAirPromise,
            popularPromise,
            topRatedPromise
        ]);

        {/* Actualizamos movieState, asignando a cada variable la correpondiente respuesta del api 
                que guardamos en el array resps[] */}        
        setSeriesState({
            airingToday: resps[0].data.results,
            onTheAir: resps[1].data.results,
            popular: resps[2].data.results,
            topRated: resps[3].data.results,
        })

        setIsLoading( false );
    }

   
    useEffect(() => {
        // now_playing
        getSeries();

    }, [])


    {/* retornamos seriesState con la información recibida del api  */}
    return {
        ...seriesState,
        isLoading
    }

}
