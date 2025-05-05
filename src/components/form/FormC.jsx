import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    doctorSeleccionado: "",
    passwordMedico: "",
  });

  const navigate = useNavigate();

  const contraseñasDoctores = {
    "Dr. Juan Pérez": "juan123",
    "Dra. Ana García": "ana123",
    "Dr. Pedro López": "pedro123",
    "Dra. Lucía Torres": "lucia123",
    "Dr. Ramiro Reynoso": "ramiro123",
  };

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
      if (!datos.doctorSeleccionado || !datos.passwordMedico) {
        alert("Completa todos los campos");
        return;
      }

      const contraseñaCorrecta =
        contraseñasDoctores[datos.doctorSeleccionado] === datos.passwordMedico;

      if (!contraseñaCorrecta) {
        alert("Usuario o contraseña incorrectos");
        return;
      }

      // Guardar la información del doctor en localStorage
      const doctorData = {
        nombre: datos.doctorSeleccionado,
        foto: `path/to/${datos.doctorSeleccionado
          .replace(" ", "_")
          .toLowerCase()}.jpg`,
        especialidad: "Especialidad del doctor", // Aquí puedes asignar la especialidad del doctor
        email: "email@dominio.com", // Este sería el email del doctor
      };
      localStorage.setItem("doctorInfo", JSON.stringify(doctorData));

      alert(`Bienvenido, ${datos.doctorSeleccionado}`);
      navigate("/doctores");
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

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Tipo de Usuario</Form.Label>
          <Form.Select
            size="sm"
            onChange={handleTipoChange}
            value={tipoUsuario}
          >
            <option value="">Selecciona una opción</option>
            <option value="paciente">Paciente</option>
            <option value="medico">Médico</option>
          </Form.Select>
        </Form.Group>

        {tipoUsuario === "paciente" && (
          <>
            <Form.Group className="mb-2">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                name="nombre"
                value={datos.nombre}
                onChange={handleChange}
                required
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
              />
            </Form.Group>
          </>
        )}

        {tipoUsuario === "medico" && (
          <>
            <Form.Group className="mb-2">
              <Form.Label>Seleccionar Doctor</Form.Label>
              <Form.Select
                size="sm"
                name="doctorSeleccionado"
                value={datos.doctorSeleccionado}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un doctor</option>
                {Object.keys(contraseñasDoctores).map((doctor, index) => (
                  <option key={index} value={doctor}>
                    {doctor}
                  </option>
                ))}
              </Form.Select>
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
              />
            </Form.Group>
          </>
        )}

        <Button variant="primary" type="submit" size="sm" className="w-100">
          {tipoUsuario === "paciente"
            ? "Registrar Paciente"
            : tipoUsuario === "medico"
            ? "Ingresar como Médico"
            : "Continuar"}
        </Button>
      </Form>
    </Container>
  );
};

export default FormC;
