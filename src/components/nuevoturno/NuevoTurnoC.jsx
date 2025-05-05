import React, { useState } from "react";
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

    // 📦 Obtener los turnos existentes del localStorage
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];

    // 🆕 Crear el nuevo turno
    const nuevoTurno = {
      id: turnoData.paciente + turnoData.hora,
      nombre: turnoData.paciente,
      horarioAtencion: turnoData.hora,
    };

    // 📥 Agregar el nuevo turno a la lista
    turnosGuardados.push(nuevoTurno);

    // 📤 Guardar la lista actualizada en localStorage
    localStorage.setItem("turnos", JSON.stringify(turnosGuardados));

    alert("Turno registrado correctamente");

    // 🚀 Redirigir a la lista de turnos
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
