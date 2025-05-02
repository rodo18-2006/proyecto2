import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"


const NavbarC = () => {
  return (
    <Navbar expand="lg" className="nav">
      <img className="logo" src="./img/favicon-clinica-ofmatologia.png" />
      <Container>
        <Navbar.Brand href="#home">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre nosotros</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Doctores y mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Doctores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Atencion al cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Turnos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
