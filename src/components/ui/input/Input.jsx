import React from "react";
import "./Input.css";

const Input = ({ value, type, onChange, required, label }) => {
  return (
    <>
      <input
        value={value}
        type={type}
        onChange={onChange}
        required={required}
        className="customInput h-full w-full bg-[#333] border-none outline-none rounded text-white text-base py-0 px-[20px]"
      />
      <label
        className="absolute left-5 top-[50%] transform -translate-y-1/2 text-base pointer-events-none text-[#8c8c8c] transition-all duration-[0.1s] ease-linear"
        htmlFor=""
      >
        {label}
      </label>
    </>
  );
};

export default Input;
