import React, { Component } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import MoviesListItem from './MoviesListItem';
import LoadingIndicator from '../common/LoadingIndicator';
import IMovies from '../../models/IMovies';
import { LoadingStatus } from '../../models/types';

import { getTopRatedMovies } from '../../services/topratedmovies';

type Props = {
};

type State = {
    status: LoadingStatus,
    movies?: IMovies[],
    error?: Error
};

class TopratedmoviesList extends Component<Props, State> {
    state : State = {
        status: 'LOADING'
    };

    render() {
        let el;
        const { status, movies, error } = this.state;

        switch( status ) {
            case 'LOADING':
                el = (
                    <LoadingIndicator
                        size="large"
                        message="We are fetching the list of movies. Please wait..."
                    />
                );
                break;
            case 'LOADED':
                el = (
                    <Row xs={1} md={2} lg={3}>
                        {
                            movies?.map(
                                movie => (
                                    <Col key={movie.id} className="d-flex align-items-stretch my-3">
                                        <MoviesListItem
                                            movies={movie}
                                        />
                                    </Col>
                                )
                            )
                        }
                    </Row>
                );
                break;
            case 'ERROR_LOADING':
                el = (
                    <Alert variant="danger my-3">
                        {error?.message}
                    </Alert>
                );
                break;
        }
    
        return el;
    }

    async componentDidMount() {
        this.setState({
            status: 'LOADING'
        });

        try {
            const data = await getTopRatedMovies();
            this.setState({
                status: 'LOADED',
                movies: data
            });
        } catch( error:any ) {
            this.setState({
                status: 'ERROR_LOADING',
                error
            });
        }
    }
}

export default TopratedmoviesList;