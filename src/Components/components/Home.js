import { Link } from "react-router-dom";
import React from "react";
import Lista from "./Lista";
import Logo from "../../Assets/Images/Logo.png";
import Logocss from "../../Assets/Styles/Logo.css";

function Home() {
  return (
    <div className="background">
      <h1 className="TitleR">Radar</h1>
      <h1 className="TitleD">da</h1>
      <h1 className="TitleC">Caridade</h1>
      <img src={Logo} alt="Radar da Caridade" className="LogoHome" />

      <div className="Links">
        <Link to="/Sobre">
          <h2>Conheça mais sobre o projeto</h2>
        </Link>
        <Link to="/Cadastro">
          <h2>Cadastre aqui as suas ações</h2>
        </Link>
        <div
          style={{ height: "400px", overflowX: "hidden" }}
          className="overflow-scroll w-25"
        >
          <Lista />
        </div>
      </div>
    </div>
  );
}

export default Home;
