import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";

export default function MarkerCall(props) {
  if (props.markers[0]) {
    return props.markers[0][props.markers[0].length - 1].map(
      (currentMarker) => {
        return (
          <Marker
            key={currentMarker.id}
            position={currentMarker.posição}
            icon={props.heartIcon}
          >
            <Popup>
              <Link
                className="text-decoration-none text-primary"
                to={`/${currentMarker.id}`}
              >
                Saiba mais sobre {currentMarker.nomeAção}
              </Link>
            </Popup>
          </Marker>
        );
      }
    );
  } else {
    return null;
  }
}
