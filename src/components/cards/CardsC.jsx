import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardsC = () => (
  <CardGroup>
    <Card>
      <Card.Body>
        <img
          className="image"
          src="https://cdn.clinicabaviera.com/blog/wp-content/uploads/2016/08/iStock_47247118_MEDIUM.jpg"
          alt=""
        />
        <Card.Title>👁️ Control Visual Completo</Card.Title>
        <Card.Text>
          Estudios integrales para detectar y prevenir enfermedades oculares.
        </Card.Text>
        <div className="text-center my-3">
          <Button as={Link} to="/Estudios" variant="info">
            Ver Todos los Estudios
          </Button>
        </div>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <img
          className="image"
          src="https://www.opeluce.com.pe/blog/wp-content/uploads/2024/06/shutterstock_2087876500-scaled.webp"
          alt=""
        />
        <Card.Title>✨ Cirugía Láser</Card.Title>
        <Card.Text>
          Tratamientos con tecnología láser para corregir defectos visuales.
        </Card.Text>
        <div className="text-center my-3">
          <Button as={Link} to="/cirugias-laser" variant="info">
            Ver mas informacion
          </Button>
        </div>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <img
          className="image"
          src="https://lh4.googleusercontent.com/proxy/HxuwEiWEznVRS3F8II9QlPCPd-INtYOso7lwSYFxOnel2aCkeKKgn5X6Lkh7ENRejzU87obplPnl1T_w7pvzwysqW_jNbQ"
          alt=""
        />
        <Card.Title>📅 Turnos Online</Card.Title>
        <Card.Text>Gestioná tu consulta desde casa fácil y rápido.</Card.Text>
        <div className="text-center my-3">
          <Button as={Link} to="/turnos-pacientes" variant="info">
            Solicitar Turno
          </Button>
        </div>
      </Card.Body>
    </Card>
  </CardGroup>
);

export default CardsC;
