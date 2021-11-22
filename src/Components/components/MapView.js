import "leaflet/dist/leaflet.css";
import "../../Assets/Styles/mapView.css";
import { MapContainer, TileLayer } from "react-leaflet";

function MapView() {
  const osmAttribution = `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`;

  return (
    <MapContainer
      style={{ width: "50vw", height: "50vh" }}
      center={[-23.3, -45.9]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution={osmAttribution}
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></TileLayer>
    </MapContainer>
  );
}

export default MapView;
