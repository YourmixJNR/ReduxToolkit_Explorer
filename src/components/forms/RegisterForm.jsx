import React, { useState } from "react";
import Input from "../ui/input/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <div className="w-full max-w-[450px] absolute left-1/2 top-[43%] text-white rounded p-[20px] transform -translate-x-1/2 -translate-y-1/2 bg-bgColor md:top-1/2 md:p-[70px]">
        <h2 className="text-white text-[2rem] font-bold">Toolkit Login</h2>
        <form action="" className="mt-[10px] mx-[0px] mb-[20px]">
          <div className="h-[50px] relative mb-[16px]">
            <Input
              value={text}
              type="text"
              onChange={handleTextChange}
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
          Already into Toolkit .? <Link to={"/auth/login"} className="text-white">Login now</Link>
        </p>
        <small className="block mt-[15px] text-[#b3b3b3]">
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500">Learn more.</a>
        </small>
      </div>
    </>
  );
};

export default RegisterForm;
