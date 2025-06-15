/* import React, { useState } from "react";
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
 */

import React, { useState } from "react";
import {
  Container,
  Accordion,
  Form,
  Button,
  Alert,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const AtencionClienteC = () => {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(false);
    console.log({ nombre, email, mensaje });
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4 text-primary fw-bold text-center">
        Atención al Cliente
      </h3>

      <Accordion defaultActiveKey="0" className="mb-5 shadow-sm">
        <Accordion.Item eventKey="0">
          <Accordion.Header>📅 ¿Cómo puedo agendar un turno?</Accordion.Header>
          <Accordion.Body>
            Ingresa a la sección <strong>"Turnos Online"</strong> desde tu
            perfil y haz click en <strong>"Solicitar Turno"</strong>. Completa
            el formulario y nuestro equipo te confirmará la fecha y hora por
            correo.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>⏳ ¿Cuál es el tiempo de espera?</Accordion.Header>
          <Accordion.Body>
            Normalmente atendemos dentro de los <strong>15 a 30 minutos</strong>{" "}
            posteriores a tu horario programado, según la demanda.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            📞 ¿Dónde me comunico si tengo dudas?
          </Accordion.Header>
          <Accordion.Body>
            Podés escribirnos al chat en línea, enviar un correo a{" "}
            <strong>soporte@visionary.com</strong> o llamar al{" "}
            <strong>+54 9 351 555-1234</strong> en horario de atención.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {enviado && (
        <Alert
          variant="success"
          className="text-center fw-semibold"
          dismissible
          onClose={() => setEnviado(false)}
        >
          👌 Gracias {nombre}, tu consulta fue enviada correctamente. Nos
          contactaremos a la brevedad.
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={5}>
          <Card
            className="p-4 shadow-sm border-0"
            style={{ background: "#f8f9fa" }}
          >
            <h5 className="text-center mb-4 fw-bold text-primary">
              📨 Envíanos tu consulta rápida
            </h5>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre completo"
                  required
                  className="shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu nombre.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tuemail@correo.com"
                  required
                  className="shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa un email válido.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe tu consulta..."
                  required
                  className="shadow-sm"
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, escribe tu consulta.
                </Form.Control.Feedback>
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="secondary" className="w-100">
                  📩 Enviar Consulta
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AtencionClienteC;
