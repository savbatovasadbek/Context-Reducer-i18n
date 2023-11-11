import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../store/store";
import Navbar from "./Navbar/Navbar";
// import Nav from "./Nav";

function Layout() {
  const { orderList } = useContext(Context);

  return (
    <div>
      <Navbar />
      <div className="flex items-center gap-5 py-4 bg-slate-500 text-orange-400">
        {orderList?.map((_, idx) => {
          return (
            <div key={idx}>
              <Link to={_}>{_}</Link>
            </div>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
