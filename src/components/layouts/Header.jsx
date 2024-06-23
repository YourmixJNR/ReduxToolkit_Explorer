import React from "react";
import Logo from "../logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-8 text-white font-medium">
        <Link to={"./auth/login"}>Login</Link>
        <Link to={"./auth/register"}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Header;
