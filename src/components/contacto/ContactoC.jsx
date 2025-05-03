import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const ContactoC = () => {
  return (
    <Container className="p-4">
      <h3 className="mb-4">Contacto</h3>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="tu@email.com" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu consulta aquí..."
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar Mensaje
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Información de Contacto</Card.Title>
              <Card.Text>
                <strong>Dirección:</strong> Junín 851 , San Miguel de Tucumán
                <br />
                <strong>Teléfono:</strong> +54 9 351 555-1234
                <br />
                <strong>Email:</strong> contacto@visionary.com
                <br />
                <strong>Horarios:</strong> Lunes a Viernes de 8:00 a 18:00 hs
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactoC;
