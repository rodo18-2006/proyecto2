import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import "./Estudios.css"

const ControlesVisuales = () => {
  return (
    <CardGroup className="m-4">
      <Card className="m-2">
        <Card.Img
          className="imagen"
          variant="top"
          src="https://opticasarlin.com/cdn/shop/articles/agudeza-visual-examen-de-vista-para-licencia-de-conducir_2048x.webp?v=1726247457"
        />
        <Card.Body>
          <Card.Title>Agudeza Visual</Card.Title>
          <Card.Text>
            Medición precisa de la capacidad visual para detectar problemas de
            miopía, hipermetropía y astigmatismo.
          </Card.Text>
          <Button variant="primary">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="m-2">
        <Card.Body>
          <Card.Img
            className="imagen"
            variant="top"
            src="https://mejorconsalud.as.com/wp-content/uploads/2020/08/consulta-oftalmologia.jpg"
          />
          <Card.Title>Fondo de Ojo</Card.Title>
          <Card.Text>
            Examen que permite observar la retina, nervio óptico y vasos
            sanguíneos para prevenir enfermedades.
          </Card.Text>
          <Button variant="primary">Solicitar Turno</Button>
        </Card.Body>
      </Card>

      <Card className="m-2">
        <Card.Body>
          <Card.Img
            className="imagen"
            variant="top"
            src="https://doctordelosojos.com/wp-content/uploads/2022/01/088.jpg"
          />
          <Card.Title>Tonometría</Card.Title>
          <Card.Text>
            Medición de la presión intraocular para detectar signos tempranos de
            glaucoma.
          </Card.Text>
          <Button variant="primary">Solicitar Turno</Button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default ControlesVisuales;
