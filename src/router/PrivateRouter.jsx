import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {

  return true ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
