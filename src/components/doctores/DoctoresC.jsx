import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const DoctoresC = () => {
  const [doctores, setDoctores] = useState([
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Oftalmología" },
    { id: 2, nombre: "Dra. Ana García", especialidad: "Oftalmología" },
    { id: 3, nombre: "Dr. Pedro López", especialidad: "Oftalmología" },
    { id: 4, nombre: "Dra. Lucía Torres", especialidad: "Oftalmología" },
    { id: 5, nombre: "Dr. Ramiro Reynoso", especialidad: "Oftalmología" },
  ]);

 

  return (
    <Container className="mt-4">
      <h3>Lista de Doctores</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {doctores.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.nombre}</td>
              <td>{doctor.especialidad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DoctoresC;
