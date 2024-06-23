
const Button = ({ type, value }) => {
  return (
    <>
      <button
        type={type}
        className="w-full py-[16px] text-base bg-[#e50914] text-white font-medium rounded border-none outline-none mt-[25px] mb-[10px] cursor-pointer transition-all duration-[0.1s] ease-linear hover:bg-[#c40812]"
      >
        {value}
      </button>
    </>
  );
};

export default Button;
