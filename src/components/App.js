import react from "react";
import { Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
