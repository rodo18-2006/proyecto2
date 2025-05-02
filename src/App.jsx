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
        </Routes>
      </Router>
    </div>
  );
};

export default App;
