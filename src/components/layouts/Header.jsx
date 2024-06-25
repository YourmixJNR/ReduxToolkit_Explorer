import React from "react";
import Logo from "../logo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/auth/reducer";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/reducer";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <nav className="flex justify-between items-center">
      <Logo />
      {isLoggedIn ? (
        <div onClick={handleLogout} className="hover:cursor-pointer text-white">
          log out
        </div>
      ) : (
        <div className="flex gap-8 text-white font-medium">
          <Link to={"./auth/login"}>Login</Link>
          <Link to={"./auth/register"}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
