import React, { useState } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";

const PerfilDoctorC = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    nombre: "Dr. Juan Pérez",
    especialidad: "Oftalmología",
    email: "juan.perez@visionary.com",
  });

  return (
    <div className="p-3">
      <h4>Mi Perfil</h4>
      <Card>
        <Card.Body className="text-center">
          <Image
            src="https://s3.us-east-1.amazonaws.com/doctoralia.com.mx/doctor/2b8963/2b896323121d5cf8322d7c662583a893_large.jpg"
            roundedCircle
            alt="Foto del Doctor"
            width="150"
            height="150"
            className="mb-3"
          />

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={doctorInfo.nombre}
                readOnly
                autoComplete="name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                value={doctorInfo.especialidad}
                readOnly
                autoComplete="organization-title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={doctorInfo.email}
                readOnly
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cambiar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nueva Contraseña"
                autoComplete="new-password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Guardar Cambios
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PerfilDoctorC;
