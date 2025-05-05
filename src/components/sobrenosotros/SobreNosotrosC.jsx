import React from "react";
import { Card, Container } from "react-bootstrap";

const SobreNosotrosC = () => {
  return (
    <Container className="p-4">
      <h3 className="mb-4">Sobre Visionary</h3>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Bienvenidos a Visionary</Card.Title>
          <Card.Text>
            Somos una clínica oftalmológica dedicada a cuidar de tu salud
            visual, combinando tecnología avanzada y un equipo médico
            comprometido con tu bienestar. Nuestro espacio está diseñado para
            brindarte comodidad, confianza y una atención personalizada desde el
            primer momento en que nos visitas.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Nuestra Historia</Card.Title>
          <Card.Text>
            Visionary nació con el objetivo de brindar atención oftalmológica de
            calidad, fusionando innovación tecnológica y un equipo médico de
            excelencia. Desde nuestros inicios en 2022, trabajamos
            incansablemente para preservar y mejorar la visión de cada uno de
            nuestros pacientes, ofreciendo diagnósticos precisos y tratamientos
            efectivos en un ambiente cálido y profesional.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Misión y Visión</Card.Title>
          <Card.Text>
            <strong>Misión:</strong> Proporcionar soluciones oftalmológicas
            personalizadas, seguras y de alta calidad, mejorando la calidad de
            vida de nuestros pacientes a través de un servicio humano y
            profesional.
            <br />
            <br />
            <strong>Visión:</strong> Convertirnos en un referente nacional en
            atención médica visual, destacando por nuestra innovación constante,
            calidad en el servicio y compromiso con la salud visual de la
            comunidad.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>¿Por qué elegir Visionary?</Card.Title>
          <Card.Text>
            Porque priorizamos tu salud visual con un equipo de profesionales
            altamente capacitados, equipamiento de última generación y un
            enfoque humano en cada consulta. Nos esforzamos en ofrecerte una
            experiencia médica integral, desde un diagnóstico detallado hasta
            tratamientos personalizados que se adaptan a tus necesidades.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mx-auto" style={{ maxWidth: "300px" }}>
        <Card.Img variant="top" src="./img/img-card-perfil.png" />
        <Card.Body>
          <Card.Text>
            Diseñado por: Rodolfo Nicolás Juarez
          </Card.Text>
          <Card.Text>
            Desarrollado por: Rodolfo Nicolás Juarez
          </Card.Text>
          <Card.Text>
            Página creada por:Rodolfo Nicolás Juarez
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SobreNosotrosC;
