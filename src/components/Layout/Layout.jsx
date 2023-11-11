import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../store/store";
import Navbar from "./Navbar/Navbar";

function Layout() {
  const { orderList } = useContext(Context);

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
