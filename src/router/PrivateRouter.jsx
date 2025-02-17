import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  if (!currentUser) {
    return <Navigate to="/" />;  // Eğer kullanıcı yoksa Login sayfasına yönlendir
  }

  return <Outlet />;  // Eğer kullanıcı varsa Dashboard'ı göster
};

export default PrivateRouter;
