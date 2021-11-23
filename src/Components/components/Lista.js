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
              <div key={currentAção._id} className="bg-light">
                <div className="pb-3 my-0 border-bottom border-3 border-secondary">
                  <Link
                    className="text-decoration-none "
                    to={`/${currentAção._id}`}
                  >
                    <h5 className="text-secondary">{currentAção.nomeAção}</h5>
                    <p className="text-secondary m-0">
                      {currentAção.logradouro}
                    </p>
                    <small className="text-uppercase text-end">
                      {currentAção.cidade} - {currentAção.estado}
                    </small>
                    <aside>Ação organizada por {currentAção.nomeOrg}</aside>
                  </Link>
                  <Link to={`editar/${currentAção._id}`}>
                    <button>Editar essa ação</button>
                  </Link>
                  <Link to={`deletar/${currentAção._id}`}>
                    <button>Deletar essa ação</button>
                  </Link>
                </div>
              </div>
            );
          })
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return <div>{ações}</div>;
}
