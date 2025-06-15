/* import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NuevoTurnoC = () => {
  const [turnoData, setTurnoData] = useState({
    paciente: "",
    fecha: "",
    hora: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTurnoData({ ...turnoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
    const nuevoTurno = {
      id: turnoData.paciente + turnoData.hora,
      nombre: turnoData.paciente,
      horarioAtencion: turnoData.hora,
    };
    turnosGuardados.push(nuevoTurno);
    localStorage.setItem("turnos", JSON.stringify(turnosGuardados));

    alert("Turno registrado correctamente");
    navigate("/turno-doctor");
  };

  return (
    <div className="p-3">
      <h4>Crear Nuevo Turno</h4>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Paciente</Form.Label>
              <Form.Control
                type="text"
                name="paciente"
                value={turnoData.paciente}
                onChange={handleChange}
                required
                placeholder="Nombre del paciente"
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={turnoData.fecha}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                value={turnoData.hora}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Registrar Turno
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NuevoTurnoC;
 */

import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NuevoTurnoC = () => {
  const [turnoData, setTurnoData] = useState({
    paciente: "",
    fecha: "",
    hora: "",
    motivoConsulta: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTurnoData({ ...turnoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];

    const nuevoTurno = {
      id: Date.now(),
      nombre: turnoData.paciente,
      fecha: turnoData.fecha,
      horarioAtencion: turnoData.hora,
      motivoConsulta: turnoData.motivoConsulta,
      estado: "Pendiente",
    };

    turnosGuardados.push(nuevoTurno);
    localStorage.setItem("turnos", JSON.stringify(turnosGuardados));

    alert("Turno registrado correctamente");
    navigate("/turno-doctor");
  };

  return (
    <div className="p-3">
      <h4>Crear Nuevo Turno</h4>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Paciente</Form.Label>
              <Form.Control
                type="text"
                name="paciente"
                value={turnoData.paciente}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={turnoData.fecha}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="time"
                name="hora"
                value={turnoData.hora}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Motivo de Consulta</Form.Label>
              <Form.Control
                type="text"
                name="motivoConsulta"
                value={turnoData.motivoConsulta}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Registrar Turno
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NuevoTurnoC;
