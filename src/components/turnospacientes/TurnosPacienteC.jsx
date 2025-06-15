import React, { useState } from "react";
import { Table, Button, Alert, Form, Card } from "react-bootstrap";

const TurneroPacienteC = () => {
  const [turnos, setTurnos] = useState([
    { id: 1, fecha: "2025-05-05", hora: "10:00", estado: "Confirmado" },
    { id: 2, fecha: "2025-05-12", hora: "14:00", estado: "Pendiente" },
  ]);

  const [mensaje, setMensaje] = useState("");

  const [nuevoTurno, setNuevoTurno] = useState({
    nombre: "",
    documento: "",
    fecha: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setNuevoTurno({ ...nuevoTurno, [e.target.name]: e.target.value });
  };

  const solicitarTurno = (e) => {
    e.preventDefault();

    if (
      !nuevoTurno.nombre ||
      !nuevoTurno.documento ||
      !nuevoTurno.fecha ||
      !nuevoTurno.telefono
    ) {
      setMensaje("Por favor, completá todos los campos.");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }

    const turnoAgendado = {
      id: Date.now(),
      fecha: nuevoTurno.fecha,
      hora: "A confirmar",
      estado: "Pendiente",
      ...nuevoTurno,
    };

    setTurnos([...turnos, turnoAgendado]);

    setMensaje("Turno solicitado correctamente.");
    setNuevoTurno({
      nombre: "",
      documento: "",
      fecha: "",
      telefono: "",
    });

    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="p-3">
      <h4>Mis Turnos</h4>

      {mensaje && <Alert variant="info">{mensaje}</Alert>}

      <Table striped bordered hover className="mb-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={turno.id}>
              <td>{index + 1}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>{turno.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Solicitar nuevo turno</h5>
      <Card>
        <Card.Body>
          <Form onSubmit={solicitarTurno}>
            <Form.Group className="mb-2">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nuevoTurno.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Número de Documento</Form.Label>
              <Form.Control
                type="text"
                name="documento"
                value={nuevoTurno.documento}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Fecha Solicitada</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={nuevoTurno.fecha}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={nuevoTurno.telefono}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Solicitar Turno
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TurneroPacienteC;
