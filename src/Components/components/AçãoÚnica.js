import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import NavBar from "./NavBar";
import axios from "axios";

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

  useEffect(() => {
    axios
      .put(`https://ironrest.herokuapp.com/radar-da-caridade/${params.id}`, {
        essaAção,
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="box d-flex flex-column justify-content-center align-items-center">
        <div className="btn btn-success btn-lg">
          <h1>{essaAção.nomeAção}</h1>
          <p>{essaAção.descrição}</p>

          <h3>
            Ação realizada em {essaAção.logradouro}, {essaAção.numero}{" "}
            {essaAção.complemento}
          </h3>
          <h3>
            {essaAção.cidade} - {essaAção.estado}
          </h3>
          <h3>Data {essaAção.data}</h3>

          <small>
            Ação organizada por: {essaAção.nomeOrg}.{" "}
            {essaAção.telOrg ? essaAção.telOrg : null}{" "}
            {essaAção.emailOrg ? essaAção.emailOrg : null}
          </small>
        </div>
      </div>
    </div>
  );
}
