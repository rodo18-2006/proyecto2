import React, { useState } from "react";
import {
  Container,
  Accordion,
  Form,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

const AtencionClienteC = () => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email, mensaje });
    setEnviado(true);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Atención al Cliente</h3>

      <Accordion className="mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>¿Cómo puedo agendar un turno?</Accordion.Header>
          <Accordion.Body>
            Ingresa a la sección "Turnos Online" desde tu perfil y haz click en
            "Solicitar Turno". Completa el formulario y el equipo te
            confirmará la fecha y hora.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            ¿Cuál es el tiempo de espera aproximado?
          </Accordion.Header>
          <Accordion.Body>
            Los tiempos varían según la demanda, pero solemos atender de 15 a 30
            minutos después de la hora programada.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            ¿Dónde me comunico si tengo dudas?
          </Accordion.Header>
          <Accordion.Body>
            Puedes escribirnos al chat en línea, enviar un correo a
            soporte@visionary.com o llamar al +54 9 351 555-1234 en horario de
            atención.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <h5 className="text-center mb-3">Envíanos tu consulta rápida</h5>
      {enviado && (
        <Alert variant="success" onClose={() => setEnviado(false)} dismissible>
          ¡Tu mensaje fue enviado correctamente!
        </Alert>
      )}
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre completo"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tuemail@correo.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu consulta..."
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="primary">
                Enviar Consulta
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AtencionClienteC;
