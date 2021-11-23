import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sobre from "./Sobre";
import Cadastro from "./Cadastro";
import Home from "./Home";
import AçãoÚnica from "./AçãoÚnica";
import EditarAção from "./EditarAção";
import DeletarAção from "./DeletarAção";
import "bootstrap/dist/css/bootstrap.min.css";
import MapView from "./MapView";
import Background from "../../Assets/Images/fundo.jpg";

function App() {
  return (
    <div>
      <img className="background" src={Background} />
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/:id" element={<AçãoÚnica />} />
          <Route path="/editar/:id" element={<EditarAção />} />
          <Route path="/deletar/:id" element={<DeletarAção />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
