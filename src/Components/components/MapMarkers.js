import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MapMarkers(props) {
  const [ações, setAções] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://ironrest.herokuapp.com/radar-da-caridade/",
    })
      .then((response) =>
        setAções(
          response.data.map((currentAção) => {
            return;
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return;
}
