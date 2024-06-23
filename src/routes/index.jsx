import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import RegisterForm from "../components/forms/RegisterForm";

const RootRouter = () => {
  return (
    <Routes>
      <Route exact path={"/"} element={<Home />} />
      <Route exact path={"/auth/login"} element={<Login />} />
      <Route exact path={"/auth/register"} element={<RegisterForm />} />
    </Routes>
  );
};

export default RootRouter;
