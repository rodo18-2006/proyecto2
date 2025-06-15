/* import React, { useState } from "react";
import { Table, Button, Alert, Form, Card } from "react-bootstrap";

const TurneroPacienteC = () => {
  const [turnos, setTurnos] = useState([
    { id: 1, fecha: "2025-05-05", hora: "10:00", estado: "Confirmado" },
    { id: 2, fecha: "2025-05-12", hora: "14:00", estado: "Pendiente" },
  ]);

  const [mensaje, setMensaje] = useState("");

  const [nuevoTurno, setNuevoTurno] = useState({
    nombre: "",
    documento: "",
    fecha: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setNuevoTurno({ ...nuevoTurno, [e.target.name]: e.target.value });
  };

  const solicitarTurno = (e) => {
    e.preventDefault();

    if (
      !nuevoTurno.nombre ||
      !nuevoTurno.documento ||
      !nuevoTurno.fecha ||
      !nuevoTurno.telefono
    ) {
      setMensaje("Por favor, completá todos los campos.");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }

    const turnoAgendado = {
      id: Date.now(),
      fecha: nuevoTurno.fecha,
      hora: "A confirmar",
      estado: "Pendiente",
      ...nuevoTurno,
    };

    setTurnos([...turnos, turnoAgendado]);

    setMensaje("Turno solicitado correctamente.");
    setNuevoTurno({
      nombre: "",
      documento: "",
      fecha: "",
      telefono: "",
    });

    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="p-3">
      <h4>Mis Turnos</h4>

      {mensaje && <Alert variant="info">{mensaje}</Alert>}

      <Table striped bordered hover className="mb-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={turno.id}>
              <td>{index + 1}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>{turno.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Solicitar nuevo turno</h5>
      <Card>
        <Card.Body>
          <Form onSubmit={solicitarTurno}>
            <Form.Group className="mb-2">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nuevoTurno.nombre}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Número de Documento</Form.Label>
              <Form.Control
                type="text"
                name="documento"
                value={nuevoTurno.documento}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Fecha Solicitada</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={nuevoTurno.fecha}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={nuevoTurno.telefono}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Solicitar Turno
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TurneroPacienteC;
 */

import React, { useState, useEffect } from "react";
import { Table, Button, Alert, Form, Card } from "react-bootstrap";

const TurneroPacienteC = () => {
  const [turnos, setTurnos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [validated, setValidated] = useState(false);

  const [nuevoTurno, setNuevoTurno] = useState({
    nombre: "",
    documento: "",
    fecha: "",
    telefono: "",
    doctor: "",
    motivoConsulta: "", // <-- agregado
  });

  const doctores = [
    { id: "juan-perez", nombre: "Dr Juan Perez" },
    { id: "ana-garcia", nombre: "Dra Ana Garcia" },
    { id: "pedro-lopez", nombre: "Dr Pedro Lopez" },
    { id: "lucia-torres", nombre: "Dra Lucia Torres" },
    { id: "ramiro-reynoso", nombre: "Dr Ramiro Reynoso" },
  ];

  useEffect(() => {
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
    setTurnos(turnosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("turnos", JSON.stringify(turnos));
  }, [turnos]);

  const handleChange = (e) => {
    setNuevoTurno({ ...nuevoTurno, [e.target.name]: e.target.value });
  };

  const solicitarTurno = (e) => {
    e.preventDefault();
    setValidated(true);

    const { nombre, documento, fecha, telefono, doctor, motivoConsulta } =
      nuevoTurno;

    if (
      !nombre ||
      !documento ||
      !fecha ||
      !telefono ||
      !doctor ||
      !motivoConsulta
    ) {
      setMensaje(
        "Por favor, completá todos los campos, incluyendo el motivo de consulta."
      );
      setTimeout(() => setMensaje(""), 3000);
      return;
    }

    const hoy = new Date().toISOString().split("T")[0];
    if (fecha < hoy) {
      setMensaje("La fecha no puede ser anterior a hoy.");
      setTimeout(() => setMensaje(""), 3000);
      return;
    }

    const turnoAgendado = {
      id: Date.now(),
      fecha,
      hora: "A confirmar",
      estado: "Pendiente",
      doctor,
      ...nuevoTurno,
    };

    setTurnos([...turnos, turnoAgendado]);

    setMensaje("Turno solicitado correctamente.");
    setNuevoTurno({
      nombre: "",
      documento: "",
      fecha: "",
      telefono: "",
      doctor: "",
      motivoConsulta: "", // <-- resetear
    });
    setValidated(false);

    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="p-3">
      <h4>Mis Turnos</h4>

      {mensaje && <Alert variant="info">{mensaje}</Alert>}

      <Table striped bordered hover className="mb-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Doctor</th>
            <th>Motivo Consulta</th> {/* <-- agregado */}
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={turno.id}>
              <td>{index + 1}</td>
              <td>{turno.fecha}</td>
              <td>{turno.hora}</td>
              <td>{turno.estado}</td>
              <td>
                {doctores.find((d) => d.id === turno.doctor)?.nombre ||
                  "No asignado"}
              </td>
              <td>{turno.motivoConsulta}</td> {/* <-- mostrar motivo */}
            </tr>
          ))}
        </tbody>
      </Table>

      <h5>Solicitar nuevo turno</h5>
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={solicitarTurno}>
            {/* ...otros campos igual */}

            <Form.Group className="mb-2">
              <Form.Label>Motivo de la Consulta</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="motivoConsulta"
                value={nuevoTurno.motivoConsulta}
                onChange={handleChange}
                isInvalid={validated && !nuevoTurno.motivoConsulta}
                placeholder="Describe brevemente el motivo de tu consulta"
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingresá el motivo de la consulta.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Doctor</Form.Label>
              <Form.Select
                name="doctor"
                value={nuevoTurno.doctor}
                onChange={handleChange}
                isInvalid={validated && !nuevoTurno.doctor}
              >
                <option value="">Seleccione un doctor</option>
                {doctores.map((doc) => (
                  <option key={doc.id} value={doc.id}>
                    {doc.nombre}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor, seleccioná un doctor.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nuevoTurno.nombre}
                onChange={handleChange}
                isInvalid={validated && !nuevoTurno.nombre}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingresá tu nombre completo.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Número de Documento</Form.Label>
              <Form.Control
                type="text"
                name="documento"
                value={nuevoTurno.documento}
                onChange={handleChange}
                isInvalid={validated && !nuevoTurno.documento}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingresá tu número de documento.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Fecha Solicitada</Form.Label>
              <Form.Control
                type="date"
                name="fecha"
                value={nuevoTurno.fecha}
                onChange={handleChange}
                isInvalid={
                  validated &&
                  (!nuevoTurno.fecha ||
                    nuevoTurno.fecha < new Date().toISOString().split("T")[0])
                }
              />
              <Form.Control.Feedback type="invalid">
                Ingresá una fecha válida a partir de hoy.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de Teléfono</Form.Label>
              <Form.Control
                type="tel"
                name="telefono"
                value={nuevoTurno.telefono}
                onChange={handleChange}
                isInvalid={validated && !nuevoTurno.telefono}
              />
              <Form.Control.Feedback type="invalid">
                Por favor, ingresá tu número de teléfono.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Solicitar Turno
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TurneroPacienteC;
