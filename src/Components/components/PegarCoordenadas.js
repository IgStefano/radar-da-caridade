import axios from "axios";
import { useState, useEffect } from "react";

export default function PegarCoordenadas(props) {
  const [coordenadas, setCoordenadas] = useState([]);
  const endereço = [
    props.logradouro,
    props.numero ? props.numero : null,
    props.cep,
  ].join(" "); // Pega os dados para a busca e junta eles em uma string

  useEffect(() => {
    axios
      .get(
        `https://us1.locationiq.com/v1/search.php?key=pk.a30beab4b3f3ebe1c0c0408641e2320a&q=${endereço}&format=json`
      ) // Pega as coordenadas da API
      .then((response) => {
        let data = [response.data[0].lat, response.data[0].lon];

        setCoordenadas(data); // Coloca as coordenadas em uma array, na ordem: latitude e longitude
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return coordenadas; // retorna a array de coordenadas
}
