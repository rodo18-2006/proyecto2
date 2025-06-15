/* import React, { useState } from "react";
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

      // Guardar sesión de paciente
      localStorage.setItem("isLoggedIn", "true");

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

      // Guardar sesión y datos de médico
      const doctorData = {
        nombre: datos.doctorSeleccionado,
        foto: `path/to/${datos.doctorSeleccionado
          .replace(" ", "_")
          .toLowerCase()}.jpg`,
        especialidad: "Especialidad del doctor",
        email: "email@dominio.com",
      };
      localStorage.setItem("doctorInfo", JSON.stringify(doctorData));
      localStorage.setItem("isLoggedIn", "true");

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
 */


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const contraseñasDoctores = {
  "Dr. Juan Pérez": "juan123",
  "Dra. Ana García": "ana123",
  "Dr. Pedro López": "pedro123",
  "Dra. Lucía Torres": "lucia123",
  "Dr. Ramiro Reynoso": "ramiro123",
};

const FormC = () => {
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [validated, setValidated] = useState(false);
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
  const [mostrarLoginPaciente, setMostrarLoginPaciente] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos((prev) => ({ ...prev, [name]: value }));
  };

  const handleTipoChange = (e) => {
    setTipoUsuario(e.target.value);
    setMostrarLoginPaciente(false);
    setDatos({
      nombre: "",
      email: "",
      telefono: "",
      nacimiento: "",
      password: "",
      repetirPassword: "",
      doctorSeleccionado: "",
      passwordMedico: "",
    });
  };

  const guardarPaciente = (nuevoPaciente) => {
    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    pacientes.push(nuevoPaciente);
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(true);

    if (!tipoUsuario) {
      alert("Selecciona un tipo de usuario");
      return;
    }

    if (tipoUsuario === "paciente") {
      const { nombre, email, telefono, nacimiento, password, repetirPassword } =
        datos;

      if (password !== repetirPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      guardarPaciente({ nombre, email, telefono, nacimiento, password });
      localStorage.setItem("isLoggedIn", "true");

      if (window.confirm("Paciente registrado correctamente. ¿Ir al inicio?")) {
        navigate("/inicio");
      }
    }

    if (tipoUsuario === "medico") {
      const { doctorSeleccionado, passwordMedico } = datos;
      const contraseñaCorrecta =
        contraseñasDoctores[doctorSeleccionado] === passwordMedico;

      if (!contraseñaCorrecta) {
        alert("Usuario o contraseña incorrectos");
        return;
      }

      const doctorData = {
        nombre: doctorSeleccionado,
        foto: `path/to/${doctorSeleccionado
          .replace(/\s+/g, "_")
          .toLowerCase()}.jpg`,
        especialidad: "Oftalmología",
        email: "email@clinica.com",
      };

      localStorage.setItem("doctorInfo", JSON.stringify(doctorData));
      localStorage.setItem("isLoggedIn", "true");

      if (window.confirm(`Bienvenido, ${doctorSeleccionado}. ¿Continuar?`)) {
        navigate("/doctores");
      }
    }
  };

  const handleLoginPaciente = () => {
    const pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
    const pacienteEncontrado = pacientes.find(
      (p) => p.email === loginEmail && p.password === loginPassword
    );

    if (!pacienteEncontrado) {
      alert("Email o contraseña incorrectos");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("pacienteInfo", JSON.stringify(pacienteEncontrado));

    alert(`Bienvenido, ${pacienteEncontrado.nombre}`);
    navigate("/inicio");
  };

  return (
    <Container
      className="mt-4 p-4 border rounded shadow-sm"
      style={{ maxWidth: "420px" }}
    >
      <h3 className="text-center mb-4 fw-bold text-primary">
        Visionary Oftalmología
      </h3>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tipo de Usuario</Form.Label>
          <Form.Select
            size="sm"
            onChange={handleTipoChange}
            value={tipoUsuario}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="paciente">Paciente</option>
            <option value="medico">Médico</option>
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            Este campo es obligatorio.
          </Form.Control.Feedback>
        </Form.Group>

        {tipoUsuario === "paciente" && !mostrarLoginPaciente && (
          <>
            {[
              "nombre",
              "email",
              "telefono",
              "nacimiento",
              "password",
              "repetirPassword",
            ].map((campo, i) => (
              <Form.Group key={i} className="mb-3">
                <Form.Label>
                  {campo === "nacimiento"
                    ? "Fecha de Nacimiento"
                    : campo === "repetirPassword"
                    ? "Repetir Contraseña"
                    : campo.charAt(0).toUpperCase() + campo.slice(1)}
                </Form.Label>
                <Form.Control
                  size="sm"
                  type={
                    campo.includes("password")
                      ? "password"
                      : campo === "email"
                      ? "email"
                      : campo === "telefono"
                      ? "tel"
                      : campo === "nacimiento"
                      ? "date"
                      : "text"
                  }
                  name={campo}
                  value={datos[campo]}
                  onChange={handleChange}
                  placeholder={`Ingrese ${
                    campo === "repetirPassword"
                      ? "nuevamente su contraseña"
                      : `su ${campo}`
                  }`}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Este campo es obligatorio.
                </Form.Control.Feedback>
              </Form.Group>
            ))}
            <Button
              variant="secondary"
              size="sm"
              className="w-100 mb-2"
              onClick={() => setMostrarLoginPaciente(true)}
            >
              ¿Ya tenés cuenta?
            </Button>
          </>
        )}

        {tipoUsuario === "paciente" && mostrarLoginPaciente && (
          <>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                size="sm"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Ingrese su email"
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                size="sm"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio.
              </Form.Control.Feedback>
            </Form.Group>
            <Button
              variant="primary"
              size="sm"
              className="w-100 mb-2"
              onClick={handleLoginPaciente}
            >
              Ingresar
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="w-100"
              onClick={() => setMostrarLoginPaciente(false)}
            >
              Volver a registro
            </Button>
          </>
        )}

        {tipoUsuario === "medico" && (
          <>
            <Form.Group className="mb-3">
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
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                size="sm"
                type="password"
                name="passwordMedico"
                value={datos.passwordMedico}
                onChange={handleChange}
                placeholder="Ingrese su contraseña"
                required
              />
              <Form.Control.Feedback type="invalid">
                Este campo es obligatorio.
              </Form.Control.Feedback>
            </Form.Group>
          </>
        )}

        {!mostrarLoginPaciente && (
          <Button variant="primary" type="submit" size="sm" className="w-100">
            {tipoUsuario === "paciente"
              ? "Registrar Paciente"
              : tipoUsuario === "medico"
              ? "Ingresar como Médico"
              : "Continuar"}
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default FormC;

