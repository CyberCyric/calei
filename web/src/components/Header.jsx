import React, { useContext } from "react";
import { Navbar, Container} from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="primary" expand="sm" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" >El Caleidoscopio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    USER
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;