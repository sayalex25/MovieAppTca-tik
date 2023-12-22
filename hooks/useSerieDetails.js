import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';

// Custom Hook para solicitar al api la info particular de cada serie enviando como parámetro el Serie ID
export const useSerieDetails = ( movieId ) => {

    const [state, setState] = useState({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    {/* Función asincrona para hacer las solicitudes al api, manejar las promesas 
            y actualizar los estados de las variables */}
    const getSerieDetails = async() => {
        // consultamos al api con nuestra instancia movieDB.get...
        const movieDetailsPromise = movieDB.get(`/tv/${ movieId }`);
        const castPromise = movieDB.get(`/tv/${ movieId }/aggregate_credits`);

        const [ movieDetailsResp, castPromiseResp ] = await Promise.all([ movieDetailsPromise, castPromise ]);
        //actualizamos state con los datos recibidos del api
        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castPromiseResp.data.cast
        })
    }
    //Este useEffect llama a la función cada vez que se renderiza el screen SerieDetail
    useEffect(() => {
        getSerieDetails();
        
    }, []);


    return {
        ...state
    }
    
}
