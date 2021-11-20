import { Link } from "react-router-dom";
import React from "react";
import Sobre from "./Sobre";
import Lista from "./Lista";

function Home() {
  return (
    <div>
      <div className="home">
        <h2>Home</h2>
      </div>
      <Link to="/Sobre">
        <h2>Sobre</h2>
        <p>Conheça mais sobre o projeto</p>
      </Link>
      <Link to="/Cadastro">
        <h2>Cadastro</h2>
        <p>Cadastre aqui as suas ações</p>
      </Link>
      <Lista />
    </div>
  );
}

export default Home;
