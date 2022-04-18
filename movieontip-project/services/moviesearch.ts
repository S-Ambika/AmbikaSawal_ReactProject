import axios from 'axios';
import IMovies from '../models/IMovies';

const searchMovie = (search:string) => {
    return axios.get<IMovies[]>( `${process.env.REACT_API_SEARCH_URL}&t=${search}&apikey=313667c1` )
            .then( response => response.data )
};


export {
    searchMovie,
};