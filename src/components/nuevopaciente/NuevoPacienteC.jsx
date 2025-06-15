/* import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NuevoPacienteC = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    nacimiento: "",
    password: "",
    repetirPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.password !== datos.repetirPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    
    alert("Paciente creado correctamente");
    navigate("/doctor/pacientes");
  };

  return (
    <div className="p-3">
      <h4>Agregar Nuevo Paciente</h4>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={datos.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={datos.telefono}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                name="nacimiento"
                value={datos.nacimiento}
                onChange={handleChange}
                required
                autoComplete="bday"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={datos.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="repetirPassword"
                value={datos.repetirPassword}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Crear Paciente
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NuevoPacienteC;
 */

import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NuevoPacienteC = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    nacimiento: "",
    password: "",
    repetirPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (datos.password !== datos.repetirPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const pacientesGuardados =
      JSON.parse(localStorage.getItem("pacientes")) || [];

    const nuevoPaciente = {
      id: Date.now(),
      nombre: datos.nombre,
      email: datos.email,
      telefono: datos.telefono,
      nacimiento: datos.nacimiento,
      password: datos.password,
    };

    pacientesGuardados.push(nuevoPaciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientesGuardados));

    alert("Paciente creado correctamente");
    navigate("/doctor/pacientes");
  };

  return (
    <div className="p-3">
      <h4>Agregar Nuevo Paciente</h4>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Campos iguales */}
            <Form.Group className="mb-3">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={datos.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={datos.telefono}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control
                type="date"
                name="nacimiento"
                value={datos.nacimiento}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={datos.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="repetirPassword"
                value={datos.repetirPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Crear Paciente
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NuevoPacienteC;
