import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Lista() {
  const [ações, setAções] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://ironrest.herokuapp.com/radar-da-caridade/",
    })
      .then((response) =>
        setAções(
          response.data.map((currentAção) => {
            return (
              <div key={currentAção._id}>
                <Link to={`/${currentAção._id}`}>
                  <div className="">
                    <h5>{currentAção.nomeAção}</h5>
                    <p>{currentAção.logradouro}</p>
                    <small>
                      {currentAção.cidade} - {currentAção.estado}
                    </small>
                    <aside>Ação organizada por {currentAção.nomeOrg}</aside>
                  </div>
                </Link>
              </div>
            );
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return <div>{ações}</div>;
}
