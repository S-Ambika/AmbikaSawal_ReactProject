import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavigationMenu from './NavigationMenu';
import MoviesList from './MoviesList/MoviesList';
import TopRatedMoviesList from './MoviesList/TopratedmovieList';
import TopRatedIndianList from './MoviesList/TopRatedIndianList';
import MoviesComingList from './MoviesList/MoviesComingList';
import SearchMovie from './MoviesList/SearchMovie';
import Favourites from './favourites';
import ChangePageTitle from "./ChangePageTitle";



const App = () => {
    return (
        <>
              <ChangePageTitle pageTitle="MovieOnTip App" />

            <NavigationMenu />
            
            <Container>
                <Switch>
                    <Route path="/movies-coming" component={MoviesComingList} />
                    <Route path="/top-rated-india" component={TopRatedIndianList} />
                    <Route path="/top-rated-movies" component={TopRatedMoviesList} />
                    <Route path="/favourites" component={Favourites} />
                    <Route path="/search" component={SearchMovie} />


                    <Route path="/" component={MoviesList} />
                </Switch>
            </Container>
        </>
    );
};

export default App;