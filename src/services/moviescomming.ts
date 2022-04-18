import axios from 'axios';
import IMovies from '../models/IMovies';

const getMoviesComming = () => {
    return axios.get<IMovies[]>( `${process.env.REACT_APP_API_BASE_URL}/movies-coming` )
            .then( response => response.data )
};

export {
    getMoviesComming
};