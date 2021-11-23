import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";
import axios from "axios";
import PegarCoordenadas from "./PegarCoordenadas";

export default function AçãoÚnica() {
  const params = useParams();

  const [essaAção, setEssaAção] = useState({});

  useEffect(() => {
    axios({
      method: "get",
      url: `https://ironrest.herokuapp.com/radar-da-caridade/${params.id}`,
    })
      .then((response) => {
        setEssaAção({ ...response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>{essaAção.nomeAção}</h1>
      <p>{essaAção.descrição}</p>

      <h3>
        Ação realizada em {essaAção.logradouro}, {essaAção.numero}{" "}
        {essaAção.complemento} - {essaAção.cidade} - {essaAção.estado}, no dia{" "}
        {essaAção.data}.
      </h3>

      <small>
        Ação organizada por: {essaAção.nomeOrg}.{" "}
        {essaAção.telOrg ? essaAção.telOrg : null}{" "}
        {essaAção.emailOrg ? essaAção.emailOrg : null}
      </small>

      <small>
        Coordenadas:{" "}
        <PegarCoordenadas
          logradouro={essaAção.logradouro}
          numero={essaAção.numero ? essaAção.numero : null}
          cep={essaAção.cepAção}
        />
      </small>
    </div>
  );
}
