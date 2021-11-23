import axios from "axios";
import { useState, useEffect } from "react";

export default function PegarCoordenadas(props) {
  const [coordenadas, setCoordenadas] = useState([]);
  const endereço = [
    props.logradouro,
    props.numero ? props.numero : null,
    props.cep,
  ].join(" ");

  const params = {
    access_key: "35ffc352608969dd92020529c79ad793",
    query: endereço,
    limit: 2,
  };

  useEffect(() => {
    axios
      .get(
        `https://us1.locationiq.com/v1/search.php?key=pk.a30beab4b3f3ebe1c0c0408641e2320a&q=${endereço}&format=json`
      )
      .then((response) => {
        let data = [response.data[0].lat, response.data[0].lon];

        setCoordenadas(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(coordenadas);
  return coordenadas;
}
