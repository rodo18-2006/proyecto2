import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css"

const CarouselC = () => {
  return (
    <Carousel className="car">
      <Carousel.Item interval={1000}>
        <img
          className="img d-block w-100"
          src="./img/oftalmologia-infantil.jpg"
          alt="Examen de la vista"
        />
        <Carousel.Caption>
          <h3>Atención Profesional</h3>
          <p>Confía en nuestros especialistas para cuidar tu visión.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="img d-block w-100"
          src="./img/equipo-de-trabajo.jpg"
          alt="Tecnología en oftalmología"
        />
        <Carousel.Caption>
          <h3>Equipos de Última Generación</h3>
          <p>Diagnósticos precisos con tecnología avanzada.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="img d-block w-100"
          src="./img/imagen-prueba.jpg"
          alt="Bienestar visual"
        />
        <Carousel.Caption>
          <h3>Disfruta de una Visión Clara</h3>
          <p>Vive plenamente con una salud visual óptima.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselC;
