import axios from 'axios';
import IMovies from '../models/IMovies';

const getTopRatedMovies = () => {
    return axios.get<IMovies[]>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-movies` )
            .then( response => response.data )
};



export {
    getTopRatedMovies
};