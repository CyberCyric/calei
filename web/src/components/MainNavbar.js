import React from "react";
import { Link, Dropdown } from "react-router-dom";
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <NavDropdown title="Admin" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Artistas</NavDropdown.Item>
        <NavDropdown.Item href="/admin/categories">Categorias</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default MainNavbar;
