import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./page/Form";
import Inicio from "./page/Inicio";
import Estudios from "./page/Estudios";
import Cirugias from "./page/Cirugias";
import Consultas from "./page/Consultas";
import Error404 from "./page/error404/Error404";
import Navbardoctores from "./page/Navbardoctores";
import Paciente from "./page/Paciente";
import PerfilDoctor from "./page/PerfilDoctor";
import Nuevopaciente from "./page/Nuevopaciente";
import Nuevoturno from "./page/Nuevoturno";
import TurnosPacientes from "./page/TurnosPacientes";
import SobreNosotros from "./page/SobreNosotros";
import Contacto from "./page/Contacto";
import Doctores from "./page/Doctores";
import Horarios from "./page/Horarios";
import AtencionalCliente from "./page/AtencionalCliente";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/estudios" element={<Estudios />} />
          <Route path="/cirugias-laser" element={<Cirugias />} />
          <Route path="/consulta" element={<Consultas />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/doctores" element={<Navbardoctores />} />
          <Route path="/doctor/pacientes" element={<Paciente />} />
          <Route path="/doctor/perfil" element={<PerfilDoctor />} />
          <Route path="/doctor/pacientes/nuevo" element={<Nuevopaciente />} />
          <Route path="/doctor/turnos/nuevo" element={<Nuevoturno />} />
          <Route path="/turnos-pacientes" element={<TurnosPacientes />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/doctor" element={<Doctores />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/atencion-al-cliente" element={<AtencionalCliente />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
