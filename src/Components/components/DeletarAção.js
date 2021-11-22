import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function DeletarAção() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axios
      .delete(`https://ironrest.herokuapp.com/radar-da-caridade/${params.id}`)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>Deletando ação...</div>;
}
