import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Vedant Mukherjee</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#About me">About me</Nav.Link>
                        <Nav.Link href="#Portofolio">Portofolio</Nav.Link>
                        <Nav.Link href="#Contacts">Contacts</Nav.Link>
                        <Nav.Link eventKey={2} href="#Resume">
                            Resume
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}