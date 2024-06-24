import React, { useEffect, useState } from "react";
import Input from "../ui/input/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/reducer";
import { registerUser } from "../../store/auth/reducer";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(selectAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setPassword("");
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    const regData = {
      email,
      password,
    };

    dispatch(registerUser(regData));
  };

  return (
    <>
      <div className="w-full max-w-[450px] absolute left-1/2 top-[43%] text-white rounded p-[20px] transform -translate-x-1/2 -translate-y-1/2 bg-bgColor md:top-1/2 md:p-[70px]">
        <h2 className="text-white text-[2rem] font-bold">Toolkit Login</h2>
        <form onSubmit={handleSubmit} className="mt-[10px] mx-[0px] mb-[20px]">
          <div className="h-[50px] relative mb-[16px]">
            <Input
              value={email}
              type="email"
              onChange={handleEmailChange}
              required={true}
              label="Email or phone number"
            />
          </div>
          <div className="h-[50px] relative mb-[16px]">
            <Input
              value={password}
              type="password"
              onChange={handlePasswordChange}
              required={true}
              label="Password"
            />
          </div>
          <div className="h-[50px] relative mb-[16px]">
            <Input
              value={confirmPassword}
              type="password"
              onChange={handleConfirmPassword}
              required={true}
              label="Confirm Password"
            />
          </div>
          <Button type="submit" value="Sign In" />
        </form>
        <p className="text-[#b3b3b3]">
          Already into Toolkit .?{" "}
          <Link to={"/auth/login"} className="text-white">
            Login now
          </Link>
        </p>
        <small className="block mt-[15px] text-[#b3b3b3]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <a href="#" className="text-blue-500">
            Learn more.
          </a>
        </small>
      </div>
    </>
  );
};

export default RegisterForm;
