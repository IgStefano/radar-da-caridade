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
                    <div className="d-flex justify-content-end">
                      <small className="text-uppercase text-black-50">
                        {currentAção.cidade} - {currentAção.estado}
                      </small>
                    </div>
                    <aside className="text-sucess">
                      Ação organizada por {currentAção.nomeOrg}
                    </aside>
                  </Link>
                  <div className="d-flex justify-content-between">
                    <Link to={`editar/${currentAção._id}`}>
                      <button className="btn btn-success">
                        Editar essa ação
                      </button>
                    </Link>
                    <Link to={`deletar/${currentAção._id}`}>
                      <button className="btn btn-danger">
                        Deletar essa ação
                      </button>
                    </Link>
                  </div>
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
