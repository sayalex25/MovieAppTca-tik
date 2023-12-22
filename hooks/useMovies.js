import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';

// Custom Hook para solicitar al api la info las películas, en las secciones nowPlaying, popular, topRated y upcoming
export const useMovies = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ moviesState, setMoviesState ] = useState({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })

    {/* Función asincrona para hacer las solicitudes al api, manejar las promesas 
            y actualizar los estados de las variables */}
    const getMovies = async () => {
        
        const nowPlayingPromise = movieDB.get('/movie/now_playing');
        const popularPromise    = movieDB.get('/movie/popular');
        const topRatedPromise   = movieDB.get('/movie/top_rated');
        const upcomingPromise   = movieDB.get('/movie/upcoming');
        
        {/* Asigansmos al arreglo resps[] el resultado del manejo de las promesas recibidas
                con las respuestas al api*/}
        const resps = await Promise.all([ 
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise 
        ]);

        {/* Actualizamos movieState, asignando a cada variable la correpondiente respuesta del api 
                que guardamos en el array resps[] */}
        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results,
        })

        setIsLoading( false );
    }

   
    useEffect(() => {
        getMovies();

    }, [])
    {/* retornamos moviesState con la información recibida del api  */}
    return {
        ...moviesState,
        isLoading
    }

}
