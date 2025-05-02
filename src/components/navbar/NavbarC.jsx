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
        <Navbar.Brand href="/inicio">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Doctores y mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/doctor">Doctores</NavDropdown.Item>
              <NavDropdown.Item href="/horarios">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="/atencion-al-cliente">
                Atencion al cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
