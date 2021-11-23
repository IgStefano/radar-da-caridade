import { Link } from "react-router-dom";
import React from "react";
import Lista from "./Lista";
import Logo from "../../Assets/Images/Logo.png";
import Logocss from "../../Assets/Styles/Logo.css";
import MapView from "./MapView";

function Home() {
  return (
    <div className="background">
      <h1 className="Title R">Radar</h1>
      <h1 className="Title D">da</h1>
      <h1 className="Title C">Caridade</h1>
      <img src={Logo} alt="Radar da Caridade" className="LogoHome" />

      <div className="Links"></div>
      <Link to="/Sobre">
        <h2>Conheça mais sobre o projeto</h2>
      </Link>
      <Link to="/Cadastro">
        <h2>Cadastre aqui as suas ações</h2>
      </Link>
      <div
        style={{ height: "400px", overflowX: "hidden" }}
        className="overflow-scroll w-25 border border-2 border-secondary"
      >
        <Lista />
        <div>
          <div className="background">
            <h1 className="TitleR">Radar</h1>
            <h1 className="TitleD">da</h1>
            <h1 className="TitleC">Caridade</h1>
            <img src={Logo} alt="Radar da Caridade" className="LogoHome" />

            <div className="Links">
              <Link to="/Sobre">
                <h2
                  className="sobre btn btn-success"
                  style={{
                    height: "8%",
                    width: "28%",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Conheça mais sobre o projeto
                </h2>
              </Link>
              <Link to="/Cadastro">
                <h2
                  className="cadastro btn btn-success"
                  style={{
                    height: "9%",
                    width: "28%",
                    fontSize: "25px",
                    color: "white",
                  }}
                >
                  Cadastre aqui as suas ações
                </h2>
              </Link>
            </div>
            <div className="container">
              <div className="row">
                <div className="row"></div>
              </div>
              <div className="row">
                <div
                  className="overflow-scroll w-25 col-2"
                  style={{ height: "400px", overflowX: "hidden" }}
                >
                  <Lista />
                </div>
                <div className="col-8">
                  <MapView />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
