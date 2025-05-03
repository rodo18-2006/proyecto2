import React from "react";
import { Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const IniciodoctorC = () => {
  const siguienteTurno = {
    paciente: "Juan Perez",
    fecha: "2025-05-04",
    hora: "10:00 AM",
  };
  const totalPacientes = 42;
  const notificaciones = [
    "Solicitud de registro de paciente: Carlos L.",
    "Recordatorio: reunión de staff a las 3 PM",
  ];

  return (
    <div className="p-3">
      <h4>Panel de Control</h4>

      <Row className="g-3">
        
        <Col sm={6} md={3}>
          <Card>
            <Card.Body>
              <Card.Title>Próximo Turno</Card.Title>
              <Card.Text>
                <strong>{siguienteTurno.paciente}</strong>
                <br />
                {siguienteTurno.fecha} — {siguienteTurno.hora}
              </Card.Text>
              <Button as={Link} to="/doctor/pacientes" size="sm" variant="primary">
                Ver todos
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card bg="light">
            <Card.Body>
              <Card.Title>Pacientes Activos</Card.Title>
              <Card.Text style={{ fontSize: "2rem", fontWeight: "bold" }}>
                {totalPacientes}
              </Card.Text>
              <Button
                as={Link}
                to="/doctor/pacientes"
                size="sm"
                variant="secondary"
              >
                Ver lista
              </Button>
            </Card.Body>
          </Card>
        </Col>

        
        <Col sm={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Notificaciones</Card.Title>
              <ListGroup
                variant="flush"
                style={{ maxHeight: "150px", overflowY: "auto" }}
              >
                {notificaciones.map((note, i) => (
                  <ListGroup.Item key={i}>{note}</ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Card.Title>Acciones Rápidas</Card.Title>
              <Button
                as={Link}
                to="/doctor/pacientes/nuevo"
                size="sm"
                className="me-2"
              >
                + Nuevo Paciente
              </Button>
              <Button
                as={Link}
                to="/doctor/turnos/nuevo"
                size="sm"
                variant="success"
              >
                + Nuevo Turno
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IniciodoctorC;
