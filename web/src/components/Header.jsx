import React, { useContext } from "react";
import { Navbar, Container, Form, FormControl} from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import {
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Navbar bg="dark" expand="sm" fixed="top">
                <Container>
                    <Navbar.Brand href="#home" >El Caleidoscopio</Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end">
                        <Form.Control type="text" placeholder="Buscador" className="header-search-box" />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <h2 className="px-2"><a href="" className="secondary"><BiUser /></a></h2>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;