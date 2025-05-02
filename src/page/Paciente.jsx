import React from 'react'
import PacientesC from '../components/pacientes/PacientesC'
import FooterC from '../components/footer/FooterC'
import NavbardoctoresC from '../components/navbardoctores/NavbardoctoresC'

const Paciente = () => {
  return (
    <>
    <NavbardoctoresC />
    <PacientesC />
    <FooterC />
    </>
  )
}

export default Paciente