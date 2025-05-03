import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

const HorariosC = () => {
  // Horarios generales de la clínica
  const [horarios] = useState([
    { id: 1, dia: "Lunes", hora: "08:00 – 12:00 / 14:00 – 18:00" },
    { id: 2, dia: "Martes", hora: "08:00 – 12:00 / 14:00 – 18:00" },
    { id: 3, dia: "Miércoles", hora: "08:00 – 12:00 / 14:00 – 18:00" },
    { id: 4, dia: "Jueves", hora: "08:00 – 12:00 / 14:00 – 18:00" },
    { id: 5, dia: "Viernes", hora: "08:00 – 12:00 / 14:00 – 17:00" },
    { id: 6, dia: "Sábado", hora: "09:00 – 13:00" },
  ]);

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Horarios de Atención</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Día</th>
            <th>Horarios</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((h) => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.dia}</td>
              <td>{h.hora}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default HorariosC;
