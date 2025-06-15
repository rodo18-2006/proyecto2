/* import React from "react";
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
 */

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Send } from "lucide-react";

const ContactoC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Simple regex para validar email
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.nombre.trim() ||
      !formData.email.trim() ||
      !formData.mensaje.trim()
    ) {
      setFeedback({
        type: "error",
        message: "Por favor, completá todos los campos.",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFeedback({
        type: "error",
        message: "Por favor, ingresá un email válido.",
      });
      return;
    }

    setSending(true);
    setFeedback(null);

    // Simulación de envío
    setTimeout(() => {
      setSending(false);
      setFeedback({
        type: "success",
        message: "Mensaje enviado correctamente. ¡Gracias!",
      });
      setFormData({ nombre: "", email: "", mensaje: "" });
    }, 1500);
  };

  return (
    <Container className="p-4">
      <h3 className="mb-4">Contacto</h3>
      <Row>
        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <Form onSubmit={handleSubmit} noValidate>
              {feedback && (
                <Alert
                  variant={feedback.type === "success" ? "success" : "danger"}
                >
                  {feedback.message}
                </Alert>
              )}

              <Form.Group className="mb-3" controlId="contactoNombre">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  isInvalid={
                    feedback?.type === "error" && !formData.nombre.trim()
                  }
                />
                <Form.Control.Feedback type="invalid">
                  El nombre es obligatorio.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactoEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tu@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  isInvalid={
                    feedback?.type === "error" &&
                    (!formData.email.trim() || !validateEmail(formData.email))
                  }
                />
                <Form.Control.Feedback type="invalid">
                  Ingresá un email válido.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactoMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe tu consulta aquí..."
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  isInvalid={
                    feedback?.type === "error" && !formData.mensaje.trim()
                  }
                />
                <Form.Control.Feedback type="invalid">
                  El mensaje es obligatorio.
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={sending}
                className="d-flex align-items-center"
              >
                {sending && (
                  <Spinner animation="border" size="sm" className="me-2" />
                )}
                <Send size={18} className="me-2" /> Enviar Mensaje
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-4 shadow-sm">
            <Card.Body>
              <Card.Title>Información de Contacto</Card.Title>
              <Card.Text>
                <strong>Dirección:</strong> Junín 851, San Miguel de Tucumán
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
