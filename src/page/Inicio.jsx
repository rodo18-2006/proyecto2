import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarC from "../components/navbar/NavbarC";
import FooterC from "../components/footer/FooterC";
import CarouselC from "../components/carousel/CarouselC";
import CardsC from "../components/cards/CardsC";

const Inicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/"); // Redirige al login si no está logueado
    }
  }, [navigate]);

  return (
    <>
      <NavbarC />
      <CarouselC />
      <CardsC />
     
    </>
  );
};

export default Inicio;
  