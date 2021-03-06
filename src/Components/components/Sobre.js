import React from "react";
import NavBar from "./NavBar";
import cadastro1 from "../../Assets/Images/cadastre1.png";
import cadastro2 from "../../Assets/Images/cadastre2.png";
import mapa from "../../Assets/Images/mapaLista.png";
import denis from "../../Assets/Images/Denis.jfif";

function Sobre() {
  return (
    <div className="text-justify">
      <NavBar />
      <div className="BotaoHome" style={{ marginTop: "3%" }}>
        <h1
          className="text-center btn btn-success btn-lg box d-flex flex-column justify-content-center align-items-center"
          style={{
            color: "white",
            fontSize: "40px",
            fontFamily: "Montserrat Alternates",
          }}
        >
          Conheça o Radar da Caridade
        </h1>
        <div className="text-justify">
          <div
            className="container-fluid"
            style={{
              color: "dark",
              fontSize: "40px",
              fontFamily: "sans-serif",
              textAlign: "justify",
            }}
          >
            <p className="mx-3">
              O projeto "Radar da Caridade" é uma iniciativa que visa dar
              resposta à necessidade urgente de algo que a humanidade sempre
              enfrentou: A assistência aos menos favorecidos! Hoje, segundo a
              ONU, mais de 780 milhões de pessoas vivem abaixo do Limiar
              Internacional da Pobreza (com menos de 1,90 dólar por dia). Isso
              significa que mais de 11% da população mundial vive na pobreza
              extrema! Pensando nisso, o Gerente de Operações e Service Desk
              Denis Carneiro, criou o projeto Radar da Caridade. Um espaço onde
              as pessoas podem unir-se para fazer o bem!
            </p>
            <br />
            <h2
              className="text-center btn btn-success btn-lg box d-flex flex-column justify-content-center align-items-center"
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "Montserrat Alternates",
              }}
            >
              Como funciona?
            </h2>
            <div
              className="container-fluid"
              style={{
                color: "dark",
                fontSize: "40px",
                fontFamily: "sans-serif",
                textAlign: "justify",
              }}
            >
              <p className="mx-3">
                Basta cadastrar o tipo de caridade que você irá realizar, o
                local e a hora! O mapa ficará marcado com a sua ação e assim
                mais pessoas poderão se juntar a você para fazer o bem!
              </p>
              <div className="d-flex flex-row justify-content-between">
                <div className="ima">
                  <img
                    src={cadastro1}
                    alt="home do site"
                    style={{ width: "80%" }}
                  ></img>
                </div>
                <div>
                  <img
                    src={cadastro2}
                    alt="home do cadastro"
                    style={{ width: "85%" }}
                  ></img>
                </div>
              </div>
            </div>
            <br />
            <h2
              className="text-center btn btn-success btn-lg box d-flex flex-column justify-content-center align-items-center"
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "Montserrat Alternates",
              }}
            >
              Como posso ajudar?
            </h2>
            <div
              className="container-fluid"
              style={{
                color: "dark",
                fontSize: "40px",
                fontFamily: "sans-serif",
                textAlign: "justify",
              }}
            >
              <p className="mx-3">
                Para se juntar a alguém em uma ação de caridade, basta pesquisar
                no mapa a localização onde você se encontra e uma lista com as
                ações próximas a você será mostrada! Ou você pode também clicar
                no coração mostrado no mapa e será redirecionado para os
                detalhes sobre aquela ação!
              </p>
              <div className="d-flex justify-content-center">
                <img src={mapa} alt="Mapa" style={{ width: "85%" }}></img>
              </div>
            </div>
            <br />
            <h2
              className="text-center btn btn-success btn-lg box d-flex flex-column justify-content-center align-items-center"
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "Montserrat Alternates",
              }}
            >
              Um pouco mais sobre o idealizador:
            </h2>
            <div
              className="container-fluid"
              style={{
                color: "dark",
                fontSize: "40px",
                fontFamily: "sans-serif",
                textAlign: "justify",
              }}
            >
              <div className="d-flex justify-content-end">
                <p className="mx-3">
                  Nascido em Minas Gerais e atualmente vivendo em Niterói, no
                  Rio de Janeiro, casado e pai de família, Denis Carneiro possui
                  uma vasta experiência como Gerente de Operações e Service
                  Desk. Tendo inclusive já desempenhado suas funções na
                  Globo.com, Banco BBM e Ministério Público do Estado do Rio de
                  Janeiro. De formação católica, sempre foi incentivado por seus
                  pais à pratica da caridade.
                </p>

                <img src={denis} style={{ width: "85%", width: "250px" }}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sobre;
