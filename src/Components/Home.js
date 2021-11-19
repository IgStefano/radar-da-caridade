import { Link } from "react-router-dom";
import React from "react";
import Sobre from "./Sobre";

function Home() {
  return (
    <div>
      <div class="home">
        <h1>Home</h1>
      </div>
      <Link to="/Sobre">
        <h1>Sobre</h1>
        <p>Conheça mais sobre o projeto</p>
      </Link>
    </div>
  );
}

export default Home;
