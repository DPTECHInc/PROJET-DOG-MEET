import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

export default function NavMenu() {
    return (
        <Navbar fixed="top" className="Navbar" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/Accueil">
                    <FaHome />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Login">Se connecter</Nav.Link>
                        <Nav.Link href="/About">A propos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
