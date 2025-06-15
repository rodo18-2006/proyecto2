/* import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbardoctores.css";


const NavbardoctoresC= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/");}
  return (
    

    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <img className="logo" src="./img/logo.png" alt="" />
        <Navbar.Brand as={Link} to="/doctores">
          Visionary | Doctor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="doctor-navbar-nav" />
        <Navbar.Collapse id="doctor-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/doctor/pacientes">
              Pacientes
            </Nav.Link>
            <Nav.Link as={Link} to="/turno-doctor">
              Turnos
            </Nav.Link>
            <Nav.Link as={Link} to="/doctor/perfil">
              Mi Cuenta
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" size="sm" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbardoctoresC; */

import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbardoctores.css";

const NavbardoctoresC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="doctor-navbar sticky-top">
      <Container>
        <img className="logo" src="./img/logo.png" alt="Logo Visionary" />
        <Navbar.Brand as={Link} to="/doctores" className="brand-text">
          Visionary | Doctor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="doctor-navbar-nav" />
        <Navbar.Collapse id="doctor-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={Link} to="/doctor/pacientes">
              Pacientes
            </Nav.Link>
            <Nav.Link as={Link} to="/turno-doctor">
              Turnos
            </Nav.Link>
            <Nav.Link as={Link} to="/doctor/perfil">
              Mi Cuenta
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-light"
            size="sm"
            onClick={handleLogout}
            className="logout-btn"
          >
            Cerrar Sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbardoctoresC;
