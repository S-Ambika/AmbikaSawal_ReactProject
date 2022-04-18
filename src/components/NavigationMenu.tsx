import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faTheaterMasks } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/" as={NavLink}>
                    <FontAwesomeIcon
                        icon={faTheaterMasks}
                        className="me-2"
                    />
                    Movies In Theaters
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link to="/movies-coming" as={NavLink}>Comming Soon</Nav.Link>
                    <Nav.Link to="/top-rated-india" as={NavLink}>Top Rated Indian</Nav.Link>
                    <Nav.Link to="/top-rated-movies" as={NavLink}>Top Rated Movies</Nav.Link>

                    <Nav.Link to="/favourites" as={NavLink}>Favourites</Nav.Link>

                    <Nav.Link to="/search" as={NavLink}>Search Movie</Nav.Link>


                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationMenu;