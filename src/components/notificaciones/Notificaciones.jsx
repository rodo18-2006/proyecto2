import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Notificaciones = ({ notificaciones }) => {
  
  const iconos = {
    registro: "📝",
    recordatorio: "⏰",
    alerta: "⚠️",
  };


  const obtenerIcono = (texto) => {
    if (texto.toLowerCase().includes("registro")) return iconos.registro;
    if (texto.toLowerCase().includes("recordatorio"))
      return iconos.recordatorio;
    if (texto.toLowerCase().includes("alerta")) return iconos.alerta;
    return "🔔";
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>Notificaciones</Card.Title>
        <ListGroup
          variant="flush"
          style={{ maxHeight: "150px", overflowY: "auto" }}
        >
          {notificaciones.map((note, i) => (
            <ListGroup.Item key={i} className="d-flex align-items-center">
              <span style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                {obtenerIcono(note)}
              </span>
              {note}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Notificaciones;
