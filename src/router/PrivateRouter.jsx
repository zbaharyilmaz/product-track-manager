import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = () => {
  const { token } = useSelector((state) => state.auth);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
