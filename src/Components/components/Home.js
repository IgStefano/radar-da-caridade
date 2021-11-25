import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import Lista from "./Lista";
import Logo from "../../Assets/Images/Logo.png";
import "../../Assets/Styles/Home.css";
import MapView from "./MapView";
import axios from "axios";
import Caridometro from "./Caridometro";

function Home() {
  const [ações, setAções] = useState([]);
  const [originalResponse, setOriginalResponse] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://ironrest.herokuapp.com/radar-da-caridade/",
    })
      .then((response) => {
        setOriginalResponse([...response.data]);

        setAções(
          response.data.map((currentAção) => {
            return (
              <div key={currentAção._id} className="bg-light">
                <div className="pb-3 my-0 border-bottom border-3 border-secondary">
                  <Link
                    className="text-decoration-none "
                    to={`/${currentAção._id}`}
                  >
                    <h5 className="text-secondary">{currentAção.nomeAção}</h5>
                    <p className="text-secondary m-0">
                      {currentAção.logradouro}
                    </p>
                    <div className="d-flex justify-content-end">
                      <small className="text-uppercase text-black-50">
                        {currentAção.cidade} - {currentAção.estado}
                      </small>
                    </div>
                    <aside className="text-sucess">
                      Ação organizada por {currentAção.nomeOrg}
                    </aside>
                  </Link>
                  <div className="d-flex justify-content-between">
                    <Link to={`editar/${currentAção._id}`}>
                      <button className="btn btn-success">
                        Editar essa ação
                      </button>
                    </Link>
                    <Link to={`deletar/${currentAção._id}`}>
                      <button className="btn btn-danger">
                        Deletar essa ação
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div>
        <div>
          <div className="nav">
            <div>
              <h1 className="Title R">Radar</h1>
              <h1 className="Title D">da</h1>
              <h1 className="Title C">Caridade</h1>
              <img src={Logo} alt="Radar da Caridade" className="LogoHome " />
            </div>
            <div>
              <Caridometro />
            </div>
          </div>
          <div className="ms-2">
            <div className="row d-flex align-items-center justify-content-around">
              <div className="col-4 ">
                <div
                  className="overflow-scroll border border-2 border-success"
                  style={{ height: "700px", width: "500px", marginTop: "15%" }}
                >
                  <Lista ações={ações} />
                </div>
              </div>
              <div className="col-7">
                <div className="d-flex justify-content-between align-items-center flex-row">
                  <Link to="/Sobre">
                    <h2
                      className=" w-100 btn btn-success"
                      style={{
                        fontSize: "25px",
                        color: "white",
                      }}
                    >
                      Conheça mais sobre o projeto
                    </h2>
                  </Link>
                  <Link to="/Cadastro">
                    <h2
                      className=" w-100 btn btn-success"
                      style={{
                        fontSize: "25px",
                        color: "white",
                      }}
                    >
                      Cadastre aqui as suas ações
                    </h2>
                  </Link>
                </div>
                <MapView ações={originalResponse} />
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
