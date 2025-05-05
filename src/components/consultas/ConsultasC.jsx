import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { Send } from "lucide-react";
import "./Consulta.css";

const ConsultasC = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [motivo, setMotivo] = useState("");
  const [comentarios, setComentarios] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !telefono || !motivo) {
      alert("Por favor completá todos los campos obligatorios.");
      return;
    }

    alert("Consulta enviada correctamente.");
    setNombre("");
    setEmail("");
    setTelefono("");
    setMotivo("");
    setComentarios("");
  };

  return (
    <Container className="mt-5">
      <Card className="mb-5 text-white">
        <Card.Img
          className="imagen"
          src="https://www.innovaocular.com/sites/default/files/curiosidadesdelosojos.png"
          alt="Consulta Banner"
        />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center bg-dark bg-opacity-50">
          <Card.Title className="display-4">
            Tu salud visual, nuestra prioridad
          </Card.Title>
          <Card.Text>
            Consultá con nuestros especialistas y recibí atención personalizada.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Row>
        <Col md={7}>
          <h2 className="mb-4">Agendá tu Consulta</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresá tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="+54 11 1234 5678"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Motivo de consulta</Form.Label>
              <Form.Select
                value={motivo}
                onChange={(e) => setMotivo(e.target.value)}
              >
                <option value="">Seleccioná una opción</option>
                <option>Cirugía Láser</option>
                <option>Control Visual</option>
                <option>Fondo de Ojo</option>
                <option>Presión Ocular</option>
                <option>Tonometría</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comentarios</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              <Send className="me-2" size={18} /> Enviar Consulta
            </Button>
          </Form>
        </Col>

        <Col md={5}>
          <h4>Contacto</h4>
          <p>📞 +54 11 1234 5678</p>
          <p>📧 contacto@visionary.com</p>

          <h4 className="mt-4">Horarios</h4>
          <p>Lunes a Viernes: 9:00 a 19:00</p>
          <p>Sábados: 9:00 a 13:00</p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h4>Preguntas Frecuentes</h4>
          <ul>
            <li>
              <strong>¿Puedo cancelar mi consulta?</strong> Sí, con al menos 24
              hs de anticipación.
            </li>
            <li>
              <strong>¿Debo llevar estudios previos?</strong> Es recomendable si
              los tenés.
            </li>
            <li>
              <strong>¿Atención por obras sociales?</strong> Consultar
              disponibilidad al momento de agendar.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ConsultasC;
