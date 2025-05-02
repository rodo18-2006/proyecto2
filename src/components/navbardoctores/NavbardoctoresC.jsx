import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Navbardoctores.css";


const NavbardoctoresC= () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate("/");}
  return (
    /*  <Navbar className='nav-doc'  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='text' as={Link} to="/doctor/pacientes">
          Visionary | Doctor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-doctor" />
        <Navbar.Collapse id="navbar-doctor">
          <Nav className="me-auto">
            <Nav.Link className='text' as={Link} to="/doctor/pacientes">
              Pacientes
            </Nav.Link>
            <Nav.Link className='text' as={Link} to="/doctor/turnos">
              Turnos
            </Nav.Link>
            <Nav.Link className='text' as={Link} to="/doctor/perfil">
              Mi Cuenta
            </Nav.Link>
          </Nav>
          <Button className='text-button' variant="outline-light" size="sm" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar> */

    <Navbar bg="primary"  variant="dark" expand="lg">
      <Container>
        <img className='logo' src="./img/logo.png" alt="" />
        <Navbar.Brand as={Link} to="/">
          Visionary | Doctor
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="doctor-navbar-nav" />
        <Navbar.Collapse id="doctor-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/doctor/pacientes">
              Pacientes
            </Nav.Link>
            <Nav.Link as={Link} to="/doctor/turnos">
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

export default NavbardoctoresC;