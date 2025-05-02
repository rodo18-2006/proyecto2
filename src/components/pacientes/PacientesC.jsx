import React from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PacientesC = () => {
  const pacientes = [
    { id: 1, nombre: "Juan Pérez", telefono: "381943572", turno: "10:00 AM" },
    { id: 2, nombre: "Ana García", telefono: "381238950", turno: "10:30 AM" },
    { id: 2, nombre: "Emanuel Ramo", telefono: "381758923", turno: "11:00 AM" },
    { id: 2, nombre: "Esteban Jose", telefono: "381251049", turno: "11:30 AM" },
    { id: 2, nombre: "Pablo Ramirez", telefono: "381986754", turno: "12:00 AM" },
    { id: 2, nombre: "Jose Suarez", telefono: "381302941", turno: "12:30 AM" },
  ];

  return (
    <div className="p-3">
      <h4>Mis Pacientes</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Turno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((pac) => (
            <tr key={pac.id}>
              <td>{pac.nombre}</td>
              <td>{pac.telefono}</td>
              <td>{pac.turno}</td>
              <td>
                <Button size="sm" variant="primary" as={Link} to={`/doctor/paciente/${pac.id}`} className="me-2">
                  Ver
                </Button>
                <Button size="sm" variant="success">
                  Atendido
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PacientesC;
