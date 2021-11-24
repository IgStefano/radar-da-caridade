import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../Assets/Styles/mapView.css";
import heart from "../../Assets/Images/heartIcon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PegarCoordenadas from "./PegarCoordenadas";

const heartIcon = L.icon({
  iconUrl: heart,
  iconRetinaUrl: heart,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25],
});

function MapView(props) {
  const osmAttribution = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;

  const [coordenadas, setCoordenadas] = useState([]);
  const endereço = [
    props.logradouro,
    props.numero ? props.numero : null,
    props.cepAção,
  ].join(" "); // Pega os dados para a busca e junta eles em uma string

  console.log(props.ações);

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
  }, [endereço]);

  const markers = props.ações.map((currentAção) => {
    return {
      nomeAção: currentAção.nomeAção,
      posição: coordenadas,

      id: currentAção._id,
    };
  });

  // console.log(markers[1].posição);

  const [ações, setAções] = useState([]);

  return (
    <MapContainer
      style={{ width: "770px", height: "700px" }}
      center={[-22.904311, -43.098487]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={osmAttribution}
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>

      {/* Acima, componentes que renderizam o mapa. Abaixo, o map para renderizar os marcadores dentro do mapa */}

      <Marker position={[-22.904311, -43.098487]} icon={heartIcon}>
        <Popup>
          <Link to={"/619d4b69cdf92e00177dd149"}>
            Salão de Beleza Comunitário
          </Link>
        </Popup>
      </Marker>
      <Marker position={[-23.5505367, -46.6343386]} icon={heartIcon}>
        <Popup>Sopão na Sé</Popup>
      </Marker>
    </MapContainer>
  );
}
// [
//   {
//     nomeDaAção: "sopão"
//     posição: [-23.5505367, -46.6343386]
//     id: 619d4b69cdf92e00177dd149
//   }
// ]

export default MapView;
