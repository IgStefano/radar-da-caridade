import axios from "axios";
import { useState, useEffect } from "react";
import "../../Assets/Styles/Caridometro.css";
import coracao from "../../Assets/Images/heartIcon.png";

function Caridometro() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        const resposta = await axios.get(
          "https://ironrest.herokuapp.com/radar-da-caridade"
        );
        setContador(resposta.data.length);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      className=" boxCaridometro bg-success"
      style={{
        fontSize: "10px",
        color: "white",
        textAlign: "center",
        borderRadius: "8px",
        marginLeft: "1286px",
        width: "200px",
        height: "100px",
      }}
    >
      <span className="text1 mx-3">Já foram realizadas</span>
      <img src={coracao} alt="Coração" style={{ width: "47px" }} />
      <div className="contadorBox ">
        <span className="text2 mx-2">
          <span className="contador">{contador}</span>
          ações de caridade
        </span>
      </div>
    </div>
  );
}

export default Caridometro;
