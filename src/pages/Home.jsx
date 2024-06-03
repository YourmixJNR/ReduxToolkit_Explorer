import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counter/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increment());
  };

  const decrease = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Increase here</button>
      <button onClick={decrease}>Decrease here</button>
    </div>
  );
};

export default Home;
