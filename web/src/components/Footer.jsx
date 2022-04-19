import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Navbar expand="sm" fixed="bottom" className="footer text-center">
                <span class="">Center aligned text on all viewport sizes.</span>
            </Navbar>
        </footer>
    );
};

export default Footer;