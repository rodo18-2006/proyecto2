import React from "react";
import NavbarC from "../components/navbar/NavbarC";
import TurnosDoctorC from "../components/turnodoctores/TurnoDoctorC";
import FooterC from "../components/footer/FooterC";
import NavbardoctoresC from "../components/navbardoctores/NavbardoctoresC";

const TurnoDoctor = () => {
  return (
    <>
      <NavbardoctoresC />
      <TurnosDoctorC />
      <FooterC />
    </>
  );
};

export default TurnoDoctor;
