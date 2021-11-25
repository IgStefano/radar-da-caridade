import axios from "axios";
import { useState, useEffect } from "react";
import "../Assets/Styles/Caridometro.css";

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
      className=" bg-success text-white
     boxCaridometro"
    >
      <p>Já foram realizadas</p>
      <div>{contador}</div>
      <p>ações de caridade até agora</p>
    </div>
  );
}

export default Caridometro;
