import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CirugiasLaser.css"; 

const CirugiaLaserC = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Cirugía Láser</h2>
      <Row className="mb-4">
        <Col md={12}>
          <p>
            La cirugía láser es una opción segura y eficaz para corregir
            problemas visuales como miopía, hipermetropía y astigmatismo.
            Utilizando tecnología avanzada, podemos restaurar la visión con una
            recuperación mínima.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Antes de la cirugía</Card.Title>
              <Card.Text>
                Se realizan una serie de exámenes para evaluar tu salud ocular y
                asegurarnos de que eres un buen candidato para la cirugía láser.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Durante la cirugía</Card.Title>
              <Card.Text>
                El procedimiento se realiza con anestesia local y dura solo unos
                minutos. El láser corrige los defectos de la córnea para mejorar
                la visión.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Recuperación</Card.Title>
              <Card.Text>
                Después de la cirugía, el paciente puede notar mejoras
                inmediatas, pero se recomienda descansar y evitar esfuerzo
                físico en las primeras semanas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h4>Testimonios de nuestros pacientes</h4>
          <p>
            "La cirugía láser fue rápida y me permitió ver con claridad desde el
            primer día. ¡Una excelente decisión!" - Juan P.
          </p>
          <p>
            "Después de años usando anteojos, al fin puedo ver bien sin ellos.
            El equipo de Visionary me hizo sentir segura y cuidada en todo
            momento." — Carla M.
          </p>
          <p>
            "Recuperé mi independencia visual en minutos. ¡Gracias Visionary por
            cambiar mi vida!" — Diego R.
          </p>
          <p>
            "Tenía miedo al principio, pero fue indoloro y rápido. Al otro día
            ya estaba manejando sin anteojos." — Florencia G.
          </p>
          <p>
            "No pensé que fuera tan sencillo. Me atendieron con mucha calidez y
            hoy veo mejor que nunca." — Matías E.
          </p>
          <p>
            "Lo recomiendo al 100%. Todo el proceso fue claro, profesional y los
            resultados superaron mis expectativas." — Valeria T.
          </p>
        </Col>
      </Row>

      {/* Agendar consulta */}
      <Row className="mt-5 text-center">
        <Col md={12}>
          <h3>Agenda tu consulta</h3>
          <p>
            Si estás interesado en saber si eres un buen candidato para la
            cirugía láser, agende una consulta con nuestros especialistas.
          </p>
          <Button variant="primary" href="/consulta">
            Agendar consulta
          </Button>
        </Col>
      </Row>

      {/* FAQs */}
      <Row className="mt-5">
        <Col md={12}>
          <h4>Preguntas Frecuentes</h4>
          <ul>
            <li>
              <strong>¿Es dolorosa la cirugía?</strong> No, la cirugía es
              realizada con anestesia local, por lo que no sentirás dolor
              durante el procedimiento.
            </li>
            <li>
              <strong>¿Cuánto dura el procedimiento?</strong> El procedimiento
              suele durar entre 10 y 20 minutos, dependiendo de cada caso.
            </li>
            <li>
              <strong>¿Cuánto tiempo necesito para recuperarme?</strong> La
              mayoría de los pacientes puede retomar sus actividades normales en
              pocos días, aunque se recomienda evitar esfuerzos físicos por 1-2
              semanas.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default CirugiaLaserC;
