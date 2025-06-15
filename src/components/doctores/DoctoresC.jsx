/* import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

const DoctoresC = () => {
  const [doctores, setDoctores] = useState([
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Oftalmología" },
    { id: 2, nombre: "Dra. Ana García", especialidad: "Oftalmología" },
    { id: 3, nombre: "Dr. Pedro López", especialidad: "Oftalmología" },
    { id: 4, nombre: "Dra. Lucía Torres", especialidad: "Oftalmología" },
    { id: 5, nombre: "Dr. Ramiro Reynoso", especialidad: "Oftalmología" },
  ]);

 

  return (
    <Container className="mt-4">
      <h3>Lista de Doctores</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {doctores.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.id}</td>
              <td>{doctor.nombre}</td>
              <td>{doctor.especialidad}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DoctoresC;
 */

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import { Search } from "lucide-react";
import "./Doctores.css";


const DoctoresC = () => {
  const [doctores] = useState([
    {
      id: 1,
      nombre: "Dr. Juan Pérez",
      especialidades: ["Oftalmología", "Cirugía Láser"],
      descripcion:
        "Especialista en cirugía refractiva y cuidado integral de la visión.",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      nombre: "Dra. Ana García",
      especialidades: ["Oftalmología", "Glaucoma"],
      descripcion: "Experta en diagnóstico y tratamiento del glaucoma.",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      nombre: "Dr. Pedro López",
      especialidades: ["Oftalmología", "Pediatría"],
      descripcion:
        "Atención oftalmológica especializada en niños y adolescentes.",
      foto: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 4,
      nombre: "Dra. Lucía Torres",
      especialidades: ["Oftalmología", "Retina"],
      descripcion: "Tratamientos avanzados para enfermedades de la retina.",
      foto: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 5,
      nombre: "Dr. Ramiro Reynoso",
      especialidades: ["Oftalmología", "Lentes de contacto"],
      descripcion: "Asesoramiento y adaptación de lentes de contacto.",
      foto: "https://randomuser.me/api/portraits/men/72.jpg",
    },
  ]);

  const [filtro, setFiltro] = useState("");

  const doctoresFiltrados = doctores.filter(
    (d) =>
      d.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      d.especialidades.some((esp) =>
        esp.toLowerCase().includes(filtro.toLowerCase())
      )
  );

  const solicitarTurno = (doctor) => {
    alert(`Has solicitado un turno con ${doctor.nombre}`);
  };

  return (
    <Container className="mt-4">
      <h3 className="mb-4">Nuestros Doctores</h3>

      <Form.Group className="mb-4">
        <InputGroup>
          <InputGroup.Text>
            <Search size={18} />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Buscar por nombre o especialidad"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </InputGroup>
      </Form.Group>

      <Row xs={1} md={2} lg={3} className="g-4">
        {doctoresFiltrados.length > 0 ? (
          doctoresFiltrados.map((doctor) => (
            <Col key={doctor.id}>
              <Card className="h-100 shadow-sm card-doctor">
                <Card.Img
                  variant="top"
                  src={doctor.foto}
                  alt={`Foto de ${doctor.nombre}`}
                  className="card-doctor-img"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{doctor.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {doctor.especialidades.join(", ")}
                  </Card.Subtitle>
                  <Card.Text className="flex-grow-1">
                    {doctor.descripcion}
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => solicitarTurno(doctor)}
                  >
                    Solicitar Turno
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No se encontraron doctores que coincidan con la búsqueda.</p>
        )}
      </Row>
    </Container>
  );
};

export default DoctoresC;
