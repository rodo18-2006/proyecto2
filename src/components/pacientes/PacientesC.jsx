/* import React from "react";
import { Table } from "react-bootstrap";

const PacientesC = () => {
  const pacientes = [
    {
      id: 1,
      nombre: "Juan Pérez",
      motivoConsulta: "Dolor ocular y visión borrosa",
      telefono: "381-1234567",
      horarioAtencion: "10:00 AM",
    },
    {
      id: 2,
      nombre: "Ana García",
      motivoConsulta: "Revisión de fondo de ojo",
      telefono: "381-7654321",
      horarioAtencion: "10:30 AM",
    },
    {
      id: 3,
      nombre: "Emanuel Ramo",
      motivoConsulta: "Molestia ocular por pantallas",
      telefono: "381-2345678",
      horarioAtencion: "11:00 AM",
    },
    {
      id: 4,
      nombre: "Esteban Jose",
      motivoConsulta: "Consulta por miopía",
      telefono: "381-8765432",
      horarioAtencion: "11:30 AM",
    },
    {
      id: 5,
      nombre: "Pablo Ramirez",
      motivoConsulta: "Control post-operatorio de cataratas",
      telefono: "381-3456789",
      horarioAtencion: "12:00 PM",
    },
    {
      id: 6,
      nombre: "Jose Suarez",
      motivoConsulta: "Enrojecimiento y picazón ocular",
      telefono: "381-9876543",
      horarioAtencion: "12:30 PM",
    },
  ];

  return (
    <div className="container mt-4">
      <h2>Lista de Pacientes</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Motivo de Consulta</th>
            <th>Teléfono</th>
            <th>Horario de Atención</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nombre}</td>
              <td>{paciente.motivoConsulta}</td>
              <td>{paciente.telefono}</td>
              <td>{paciente.horarioAtencion}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PacientesC;
 */
import React, { useState, useEffect } from "react";
import { Form, Table, Badge, Button } from "react-bootstrap";


const PacientesC = () => {
  const doctorLogueado = localStorage.getItem("doctorLogueado");

  const [pacientes, setPacientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];

    if (turnosGuardados.length === 0) {
      const turnosEjemplo = [
        {
          id: 1,
          nombre: "Juan Perez",
          documento: "12345678",
          motivoConsulta: "Dolor ocular y visión borrosa",
          telefono: "381-1234567",
          fecha: "2025-06-20",
          horarioAtencion: "10:00",
          estado: "Esperando",
          doctor: "juan-perez",
        },
        {
          id: 2,
          nombre: "Ana García",
          documento: "87654321",
          motivoConsulta: "Revisión de fondo de ojo",
          telefono: "381-7654321",
          fecha: "2025-06-21",
          horarioAtencion: "10:30",
          estado: "Activo",
          doctor: "juan-perez",
        },
        {
          id: 3,
          nombre: "Carlos López",
          documento: "11223344",
          motivoConsulta: "Control de glaucoma",
          telefono: "381-9999999",
          fecha: "2025-06-22",
          horarioAtencion: "11:00",
          estado: "Pendiente",
          doctor: "ana-garcia",
        },
        {
          id: 4,
          nombre: "María Torres",
          documento: "22334455",
          motivoConsulta: "Chequeo anual",
          telefono: "381-8888888",
          fecha: "2025-06-23",
          horarioAtencion: "11:30",
          estado: "Atendido",
          doctor: "juan-perez",
        },
      ];

      localStorage.setItem("turnos", JSON.stringify(turnosEjemplo));
      setPacientes(turnosEjemplo.filter((t) => t.doctor === doctorLogueado));
    } else {
      const turnosDelDoctor = turnosGuardados.filter(
        (turno) => turno.doctor === doctorLogueado
      );
      setPacientes(turnosDelDoctor);
    }
  }, [doctorLogueado]);

  const eliminarPaciente = (id) => {
    if (window.confirm("¿Eliminar paciente?")) {
      const nuevosPacientes = pacientes.filter((p) => p.id !== id);
      setPacientes(nuevosPacientes);

      const todosTurnos = JSON.parse(localStorage.getItem("turnos")) || [];
      const turnosActualizados = todosTurnos.filter((t) => t.id !== id);
      localStorage.setItem("turnos", JSON.stringify(turnosActualizados));
    }
  };

  const obtenerBadge = (estado) => {
    switch (estado) {
      case "Activo":
        return <Badge bg="success">Activo</Badge>;
      case "Esperando":
        return (
          <Badge bg="warning" text="dark">
            Esperando
          </Badge>
        );
      case "Atendido":
        return <Badge bg="secondary">Atendido</Badge>;
      case "Pendiente":
        return <Badge bg="info">Pendiente</Badge>;
      default:
        return <Badge bg="light">Sin estado</Badge>;
    }
  };

  const pacientesFiltrados = pacientes.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const cargarTurnos = () => {
    const turnosGuardados = JSON.parse(localStorage.getItem("turnos")) || [];
    const turnosDelDoctor = turnosGuardados.filter(
      (turno) => turno.doctor === doctorLogueado
    );
    setPacientes(turnosDelDoctor);
  };

  return (
    <div className="container mt-4">
      <h4>Lista de Pacientes - Doctor: {doctorLogueado}</h4>

      <Button variant="primary" className="mb-3" onClick={cargarTurnos}>
        Actualizar Turnos
      </Button>

      <Form.Control
        type="text"
        placeholder="Buscar paciente por nombre..."
        className="mb-3"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Motivo</th>
            <th>Teléfono</th>
            <th>Horario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientesFiltrados.length > 0 ? (
            pacientesFiltrados.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.nombre}</td>
                <td>{paciente.motivoConsulta}</td>
                <td>{paciente.telefono}</td>
                <td>{paciente.horarioAtencion}</td>
                <td>{obtenerBadge(paciente.estado)}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => eliminarPaciente(paciente.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center">
                No hay pacientes para este doctor
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default PacientesC;
