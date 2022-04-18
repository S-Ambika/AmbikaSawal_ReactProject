import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import IMovies from '../../models/IMovies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.css';
import PropTypes from "prop-types";


type Props = {
    movies: IMovies
    
};

const MoviesListItem = ( { movies } : Props ) => {
    const {
        id,
        title,
        storyline,
        genre,
        poster
    } = movies;

    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img style={{ width: '18rem', height:'25rem'}} variant="top" src={`http://localhost:3000/images/${poster}`} />
            <Card.Body>
                <Card.Title className="title">
                    <div >
                        {title}
                        
                    </div>
                   
                </Card.Title>
                <Card.Link className ="fav">
                 
                    Add to Favourites   
                   <div style={{margin:'4px 0 4px 4px'}}>

                   <FontAwesomeIcon
                            icon={faHeart}
                            className="me-2"
                            color='red'
                        />
                   </div>
                   
                    </Card.Link>
            </Card.Body>
        </Card>
    );
}


  
export default MoviesListItem;