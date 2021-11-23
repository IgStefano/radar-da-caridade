import { Link } from "react-router-dom";
import React from "react";
import Lista from "./Lista";
import Logo from "../../Assets/Images/Logo.png";
import Logocss from "../../Assets/Styles/Logo.css";
import MapView from "./MapView";
import Background from "../../Assets/Images/fundo.jpg";

function Home() {
  return (
    <div>
      <img className="background" src={Background} />
      <div>
        <div className="row">
          <div>
            <h1 className="Title R">Radar</h1>
            <h1 className="Title D">da</h1>
            <h1 className="Title C">Caridade</h1>
            <img src={Logo} alt="Radar da Caridade" className="LogoHome " />
          </div>
          <div className="ms-2">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-4 ">
                <Link to="/Sobre">
                  <h2
                    className="sobre w-100 btn btn-success"
                    style={{
                      fontSize: "25px",
                      color: "white",
                    }}
                  >
                    Conheça mais sobre o projeto
                  </h2>
                </Link>
                <div
                  className="overflow-scroll"
                  style={{ height: "600px", width: "auto" }}
                >
                  <Lista />
                </div>
                <Link to="/Cadastro">
                  <h2
                    className="cadastro w-100 btn btn-success"
                    style={{
                      fontSize: "25px",
                      color: "white",
                      marginTop: "-50%",
                    }}
                  >
                    Cadastre aqui as suas ações
                  </h2>
                </Link>
              </div>
              <div className="col-7">
                <MapView />
              </div>
            </div>
            <div className="row">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
