import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import "./appLayout.css";

const AppLayout = () => {
  return (
    <div className="main-layout">
      <div className="navbar-layout">
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
