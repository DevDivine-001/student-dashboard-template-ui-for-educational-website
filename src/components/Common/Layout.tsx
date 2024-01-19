import { Outlet } from "react-router-dom";
import Dashboard from "../Res/Dashboard";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex bg-slate-100">
      <Dashboard />
      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
