import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';

// Custom Hook para solicitar al api la info particular de cada película enviando como parámetro el Movie ID
export const useMovieDetails = ( movieId ) => {

    const [state, setState] = useState({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    {/* Función asincrona para hacer las solicitudes al api, manejar las promesas 
            y actualizar los estados de las variables */}
    const getMovieDetails = async() => {
        // consultamos al api con nuestra instancia movieDB.get...
        const movieDetailsPromise = movieDB.get(`/movie/${ movieId }`);
        const castPromise = movieDB.get(`/movie/${ movieId }/credits`);

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);
        //actualizamos state con los datos recibidos del api
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }
    //Este useEffect llama a la función cada vez que se renderiza el screen MovieDetail
    useEffect(() => {
        getMovieDetails();        
    }, []);


    return {
        ...state
    }
    
}
