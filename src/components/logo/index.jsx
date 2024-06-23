import React from "react";
import ReduxLogo from "../../assets/redux.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img src={ReduxLogo} alt="redux-logo" className="w-16" />
    </Link>
  );
};

export default Logo;
