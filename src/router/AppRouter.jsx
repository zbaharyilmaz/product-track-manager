import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import Home from "../pages/Home";



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          {/* <Route path="" element={<Home />}> */}
          <Route index element={<Home/>}/>
          <Route path="" element={<Dashboard />}>
            <Route path="firms" elements={<Firms />} /> {/*veya /stock/firms */}
            <Route path="brands" elements={<Brands />} />
            <Route path="purchases" elements={<Purchases />} />
            <Route path="sales" elements={<Sales />} />
            <Route path="products" elements={<Products />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
