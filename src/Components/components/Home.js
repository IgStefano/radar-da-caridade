import { Link } from "react-router-dom";
import React from "react";
import Lista from "./Lista";
import Logo from "../../Assets/Images/Logo.png";
import Logocss from "../../Assets/Styles/Logo.css";

function Home() {
  return (
    <div>
      <img src={Logo} className="LogoHome" />
      <div className="Links">
        <Link to="/Sobre">
          <h2>Conheça mais sobre o projeto</h2>
        </Link>
        <Link to="/Cadastro">
          <h2>Cadastre aqui as suas ações</h2>
        </Link>
        <Lista />
      </div>
    </div>
  );
}

export default Home;
