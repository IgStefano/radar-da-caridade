import React from "react";
import { Routes, Route } from "react-router-dom";
import Sobre from "./Sobre";
import Cadastro from "./Cadastro";
import Home from "./Home";
import AçãoÚnica from "./AçãoÚnica";
import EditarAção from "./EditarAção";
import DeletarAção from "./DeletarAção";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Assets/Styles/Home.css";

function App() {
  return (
    <div className="background">
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
