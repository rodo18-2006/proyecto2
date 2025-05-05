import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const TurnosDoctorC = () => {
  const [pacientes, setPacientes] = useState([
    {
      id: "Juan Perez" ,
      nombre: "Juan Pérez",
      horarioAtencion: "10:00 AM",
    },
    {
      id: "Ana Garcia",
      nombre: "Ana García",
      horarioAtencion: "10:30 AM",
    },
    {
      id: "Emmanuel Ramo",
      nombre: "Emanuel Ramo",
      horarioAtencion: "11:00 AM",
    },
    {
      id: "Esteban Jose",
      nombre: "Esteban Jose",
      horarioAtencion: "11:30 AM",
    },
    {
      id: "Pablo Ramirez",
      nombre: "Pablo Ramirez",
      horarioAtencion: "12:00 PM",
    },
    {
      id: "Jose Suarez",
      nombre: "Jose Suarez",
      horarioAtencion: "12:30 PM",
    },
  ]);

  const eliminarPaciente = (id) => {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  };

  const marcarAtendido = (id) => {
    alert(`El paciente  ${id} fue marcado como atendido.`);
    eliminarPaciente(id);
  };

  return (
    <div className="container mt-4">
      <h2>Turnos de Pacientes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>

            <th>Horario de Atención</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nombre}</td>
              <td>{paciente.horarioAtencion}</td>
              <td>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() => marcarAtendido(paciente.id)}
                  className="me-2"
                >
                  Atendido
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarPaciente(paciente.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {pacientes.length === 0 && (
        <p className="mt-3">No hay pacientes en espera.</p>
      )}
    </div>
  );
};

export default TurnosDoctorC;
