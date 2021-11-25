import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../Assets/Styles/mapView.css";
import heart from "../../Assets/Images/heartIcon.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import MarkerCall from "./MarkerCall";

const heartIcon = L.icon({
  iconUrl: heart,
  iconRetinaUrl: heart,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 25],
}); // Ícone usado no mapa

function MapView(props) {
  const osmAttribution = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;

  const endereços = props.ações.map((currentAção) => {
    return {
      nomeAção: currentAção.nomeAção,
      id: currentAção._id,
      logradouro: currentAção.logradouro,
      bairro: currentAção.bairro,
      numero: currentAção.numero ? currentAção.numero : "",
      cidade: currentAção.cidade,
      estado: currentAção.estado,
      cep: currentAção.cepAção,
    };
  }); // Formulário que será usado para 1) adquirir coordenadas e 2) definir os dados dos marcadores

  const [coordenadas, setCoordenadas] = useState([]);

  const [error, setError] = useState(false);

  const [markers, setMarkers] = useState([]);

  const index = useRef(0); // Ref que será usada como índice

  function wait(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), time);
    });
  } // Função cuja utilidade é esperar um segundo (tempo de intervalo de requisições da API de coordenadas)

  useEffect(() => {
    async function getCoordinates() {
      for (let i of endereços) {
        await wait(1000);

        axios
          .get(
            `https://us1.locationiq.com/v1/search.php?key=pk.a30beab4b3f3ebe1c0c0408641e2320a&q=
              ${i.logradouro},${i.numero},${i.bairro},${i.cidade},${i.estado},${i.cep}
            &format=json`
          )
          // Pega as coordenadas da API de acordo com as informações de endereço coletadas
          .then((response) => {
            if (error) {
              console.error(response);
              setError(false);
            }
            if (!error) {
              let data = coordenadas;
              console.log(response.data);
              data.push([response.data[0].lat, response.data[0].lon]);

              if (coordenadas.length < endereços.length) {
                setCoordenadas([[...coordenadas, data]]); // Coloca as coordenadas em uma array, na ordem: latitude e longitude
              }
            }
          })
          .catch((err) => {
            console.error(err);
            console.log(error);

            setError(true);
          });
        await wait(1000); // O código abaixo define os dados de cada marcador
        let markersData = markers;
        markersData.push({
          nomeAção: i.nomeAção,
          id: i.id,
          posição: coordenadas[index.current],
        });
        setMarkers([[...markers, markersData]]);
        index.current = index.current + 1;
      }
    }
    getCoordinates();
  }, [props.ações]);

  return (
    <MapContainer
      style={{ width: "auto", height: "700px" }}
      center={[-22.904311, -43.098487]}
      zoom={5}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={osmAttribution}
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>

      {/* Acima, componentes que renderizam o mapa. Abaixo, o map para renderizar os marcadores dentro do mapa */}

      {!error ? (
        <MarkerCall markers={markers} heartIcon={heartIcon} />
      ) : (
        "Não foi possível exibir o marcador"
      )}

      {/* <Marker position={[-22.904311, -43.098487]} icon={heartIcon}>
        <Popup>
          <Link to={"/619d4b69cdf92e00177dd149"}>
            Salão de Beleza Comunitário
          </Link>
        </Popup>
      </Marker>
      <Marker position={[-23.5505367, -46.6343386]} icon={heartIcon}>
        <Popup>Sopão na Sé</Popup>
      </Marker> */}
    </MapContainer>
  );

  // [
  //   {
  //     nomeDaAção: "sopão"
  //     posição: [-23.5505367, -46.6343386]
  //     id: 619d4b69cdf92e00177dd149
  //   }
  // ]
}
export default MapView;
