import React from "react";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/auth/reducer";

const Header = () => {
const dispatch = useDispatch()

  return (
    <nav className="flex justify-between items-center">
      <Logo />
      <div className="flex gap-8 text-white font-medium">
        <Link to={"./auth/login"}>Login</Link>
        <Link to={"./auth/register"}>Sign Up</Link>
        <div onClick={()=> dispatch(logoutAction())} className="hover:cursor-pointer">log out</div>
      </div>
    </nav>
  );
};

export default Header;
