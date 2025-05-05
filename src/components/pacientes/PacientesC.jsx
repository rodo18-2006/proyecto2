import React from "react";
import { Table } from "react-bootstrap";

const PacientesLista = () => {
  const pacientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      motivoConsulta: "Dolor ocular y visión borrosa",
      telefono: "381-1234567",
      horarioAtencion: "10:00 AM",
    },
    {
      id: 2,
      nombre: "Ana García",
      motivoConsulta: "Revisión de fondo de ojo",
      telefono: "381-7654321",
      horarioAtencion: "10:30 AM",
    },
    {
      id: 3,
      nombre: "Emanuel Ramo",
      motivoConsulta: "Molestia ocular por pantallas",
      telefono: "381-2345678",
      horarioAtencion: "11:00 AM",
    },
    {
      id: 4,
      nombre: "Esteban Jose",
      motivoConsulta: "Consulta por miopía",
      telefono: "381-8765432",
      horarioAtencion: "11:30 AM",
    },
    {
      id: 5,
      nombre: "Pablo Ramirez",
      motivoConsulta: "Control post-operatorio de cataratas",
      telefono: "381-3456789",
      horarioAtencion: "12:00 PM",
    },
    {
      id: 6,
      nombre: "Jose Suarez",
      motivoConsulta: "Enrojecimiento y picazón ocular",
      telefono: "381-9876543",
      horarioAtencion: "12:30 PM",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Lista de Pacientes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Motivo de Consulta</th>
            <th>Teléfono</th>
            <th>Horario de Atención</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nombre}</td>
              <td>{paciente.motivoConsulta}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.horarioAtencion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PacientesLista;
