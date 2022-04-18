import axios from 'axios';
import IMovies from '../models/IMovies';

const getMoviesInTheatre = () => {
    return axios.get<IMovies[]>( `${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters` )
            .then( response => response.data )
};


export {
    getMoviesInTheatre};