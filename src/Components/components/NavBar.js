import React from "react";
import { Link } from "react-router-dom";
import ImgNavBar from "../../Assets/Images/Logo.png";

function NavBar() {
  return (
    <div>
      <Link to="/">
        <img src={ImgNavBar} height={"180px"} alt="botão home" />
      </Link>
    </div>
  );
}

export default NavBar;
