import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const FooterC = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Visionary</h5>
            <p>Clínica oftalmológica dedicada a cuidar tu salud visual.</p>
          </Col>
          <Col md={4}>
            <h5>Contacto</h5>
            <p>Email: contacto@visionary.com</p>
            <p>Tel: +54 11 1234 5678</p>
            <p>Dirección: Junín 851, San Miguel de Tucumán</p>
          </Col>
          <Col md={4}>
            <h5>Redes Sociales</h5>
            <p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                Facebook
              </a>
            </p>
            <p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                Twitter
              </a>
            </p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} Visionary - Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
};

export default FooterC;
