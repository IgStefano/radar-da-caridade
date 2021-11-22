import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet";

function MapView() {
  return (
    <MapContainer
      style={{ width: "50vw", height: "50vh" }}
      center={[-23.3, -45.9]}
      zoom={13}
      scrollWheelZoom={false}
    ></MapContainer>
  );
}

export default MapView;
