/* import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavbarC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar sesión, como limpiar tokens o estados
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav">
      <img
        className="logo"
        src="/img/favicon-clinica-ofmatologia.png"
        alt="Logo"
      />
      <Container>
        <Navbar.Brand href="/inicio">Inicio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Doctores y más" id="basic-nav-dropdown">
              <NavDropdown.Item href="/doctor">Doctores</NavDropdown.Item>
              <NavDropdown.Item href="/horarios">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="/atencion-al-cliente">
                Atención al cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Button className="btn-black" size="sm" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const NavbarC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí pones tu lógica de logout: limpiar tokens, estados, etc.
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="nav" variant="light">
      <Container>
        <Navbar.Brand href="/inicio" className="d-flex align-items-center">
          <img
            className="logo me-2"
            src="/img/favicon-clinica-ofmatologia.png"
            alt="Logo"
          />
          Visionary
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/inicio">Inicio</Nav.Link>
            <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Doctores y más" id="basic-nav-dropdown">
              <NavDropdown.Item href="/doctor">Doctores</NavDropdown.Item>
              <NavDropdown.Item href="/horarios">Horarios</NavDropdown.Item>
              <NavDropdown.Item href="/atencion-al-cliente">
                Atención al cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item disabled>Próximamente...</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            className="btn-black"
            size="sm"
            onClick={handleLogout}
            aria-label="Cerrar sesión"
          >
            Cerrar Sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
