import React, { useState, useEffect } from "react";
import { Form, Button, Card, Image } from "react-bootstrap";

const PerfilDoctorC = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    nombre: "",
    especialidad: "",
    email: "",
  });

  // Al montar el componente, recuperar los datos del doctor desde localStorage
  useEffect(() => {
    const storedDoctorInfo = JSON.parse(localStorage.getItem("doctorInfo"));
    if (storedDoctorInfo) {
      setDoctorInfo(storedDoctorInfo);
    }
  }, []);

  return (
    <div className="p-3">
      <h4>Mi Perfil</h4>
      <Card>
        <Card.Body className="text-center">
          

          <Form>
            {/* Nombre */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={doctorInfo.nombre}
                readOnly
                autoComplete="name"
              />
            </Form.Group>

            {/* Especialidad */}
            <Form.Group className="mb-3">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                value={doctorInfo.especialidad}
                readOnly
                autoComplete="organization-title"
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={doctorInfo.email}
                readOnly
                autoComplete="email"
              />
            </Form.Group>

            {/* Cambio de contraseña */}
            <Form.Group className="mb-3">
              <Form.Label>Cambiar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nueva Contraseña"
                autoComplete="new-password"
              />
            </Form.Group>

            {/* Botón para guardar cambios */}
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

 


/* import React from "react";
import { Form, Button, Card, Image } from "react-bootstrap";

const PerfilDoctorC = () => {
  // Recuperar los datos del doctor desde localStorage
  const doctorInfo = JSON.parse(localStorage.getItem("doctorInfo"));

  if (!doctorInfo) {
    return <p className="p-3">No hay doctor logueado.</p>;
  }

  return (
    <div className="p-3">
      <h4>Mi Perfil</h4>
      <Card>
        <Card.Body className="text-center">
          { Imagen del doctor }
          <Image
            src={doctorInfo.foto || "https://via.placeholder.com/150"} // Foto por defecto si no existe
            roundedCircle
            alt="Foto del Doctor"
            width="150"
            height="150"
            className="mb-3"
          />

          <Form>
            { Nombre }
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control>
                type="text"
                value={doctorInfo.nombre}
                readOnly
                autoComplete="name"
              />
            </Form.Group>

            {/* Especialidad }
            <Form.Group className="mb-3">
              <Form.Label>Especialidad</Form.Label>
              <Form.Control
                type="text"
                value={doctorInfo.especialidad}
                readOnly
                autoComplete="organization-title"
              />
            </Form.Group>

            {/* Email }
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={doctorInfo.email}
                readOnly
                autoComplete="email"
              />
            </Form.Group>

            {/* Cambio de contraseña }
            <Form.Group className="mb-3">
              <Form.Label>Cambiar Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nueva Contraseña"
                autoComplete="new-password"
              />
            </Form.Group>

            {/* Botón para guardar cambios }
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
 */