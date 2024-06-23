import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";

const RootRouter = () => {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/auth/login"} element={<Login />} />
    </Routes>
  );
};

export default RootRouter;
