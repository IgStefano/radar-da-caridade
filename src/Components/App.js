import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sobre from "./Sobre";
import Home from "./Home";
import HomeCss from "../Assets/Styles/Home.css";

function App() {
  return (
    <div>
      <div className="Container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
