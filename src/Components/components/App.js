import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sobre from "./Sobre";
import Cadastro from "./Cadastro";
import Home from "./Home";
import Sobrecss from "../../Assets/Styles/Sobre.css";

function App() {
  return (
    <div>
      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
