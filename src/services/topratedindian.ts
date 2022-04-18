import axios from 'axios';
import IMovies from '../models/IMovies';

const getTopRatedIndian = () => {
    return axios.get<IMovies[]>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-india` )
            .then( response => response.data )
};



export {
    getTopRatedIndian
};