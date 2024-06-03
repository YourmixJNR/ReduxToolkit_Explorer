import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/counter/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increment());
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Clime me</button>
    </div>
  );
};

export default Home;