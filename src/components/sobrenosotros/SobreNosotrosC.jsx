import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const SobreNosotrosC = () => {
  return (
    <Container className="p-4">
      <h3 className="mb-4">Sobre Visionary</h3>

      <Row className="mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Nuestra Historia</Card.Title>
              <Card.Text>
                Visionary nació con el objetivo de brindar atención
                oftalmológica de calidad, combinando tecnología de vanguardia y
                un equipo médico de excelencia. Desde nuestros inicios en 2022,
                trabajamos para cuidar y mejorar la salud visual de nuestros
                pacientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Misión y Visión</Card.Title>
              <Card.Text>
                <strong>Misión:</strong> Ofrecer soluciones oftalmológicas
                personalizadas que mejoren la calidad de vida.
                <br />
                <strong>Visión:</strong> Ser referentes a nivel nacional en
                innovación y atención médica visual.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Card.Title>¿Por qué elegirnos?</Card.Title>
          <Card.Text>
            Contamos con profesionales altamente capacitados, equipamiento de
            última generación y un enfoque humano en cada consulta. En
            Visionary, tu salud visual es nuestra prioridad.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SobreNosotrosC;
