import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const FormC = () => {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    telefono: "",
    nacimiento: "",
    password: "",
    repetirPassword: "",
    usuarioMedico: "",
    passwordMedico: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleTipoChange = (e) => {
    setTipoUsuario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tipoUsuario === "paciente") {
      if (datos.password !== datos.repetirPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      alert("Paciente registrado correctamente");
      navigate("/inicio");
    } else if (tipoUsuario === "medico") {
      if (!datos.usuarioMedico || !datos.passwordMedico) {
        alert("Completa usuario y contraseña");
        return;
      }
      alert("Login médico realizado");
      navigate("/inicio");
    } else {
      alert("Selecciona un tipo de usuario");
    }
  };

  return (
    <Container
      className="mt-4 p-3 border rounded shadow-sm"
      style={{ maxWidth: "400px" }}
    >
      <h1 className="text-center mb-3">
        Bienvenido a nuestra Clínica Oftalmológica Visionary
      </h1>
      <h4 className="text-center mb-3"></h4>

      <Form.Group className="mb-2">
        <Form.Label>Tipo de Usuario</Form.Label>
        <Form.Select size="sm" onChange={handleTipoChange} value={tipoUsuario}>
          <option value="">Selecciona una opción</option>
          <option value="paciente">Paciente</option>
          <option value="medico">Médico</option>
        </Form.Select>
      </Form.Group>

      {tipoUsuario === "paciente" && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="nombre"
              value={datos.nombre}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="sm"
              type="email"
              name="email"
              value={datos.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              size="sm"
              type="tel"
              name="telefono"
              value={datos.telefono}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
              size="sm"
              type="date"
              name="nacimiento"
              value={datos.nacimiento}
              onChange={handleChange}
              required
              autoComplete="bday"
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              size="sm"
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
              size="sm"
              type="password"
              name="repetirPassword"
              value={datos.repetirPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="sm" className="w-100">
            Registrar Paciente
          </Button>
        </Form>
      )}

      {tipoUsuario === "medico" && (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              name="usuarioMedico"
              value={datos.usuarioMedico}
              onChange={handleChange}
              required
              autoComplete="username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              size="sm"
              type="password"
              name="passwordMedico"
              value={datos.passwordMedico}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />
          </Form.Group>

          <Button
            as={Link}
            to="/doctores"
            variant="success"
            type="button"
            size="sm"
            className="w-100"
          >
            Ingresar como Médico
          </Button>
        </Form>
      )}
    </Container>
  );
};

export default FormC;
