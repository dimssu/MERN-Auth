import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { handleSuccess } from "../../utils";
import { ToastContainer } from "react-toastify";
import "./navbar.css";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    setLoggedInUser(user);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logged out successfully");
    setTimeout(() => {
      navigate("/login");
    }, 400);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">{loggedInUser && <h1>Welcome {loggedInUser}</h1>}</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/home">Dashboard</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <button onClick={handleLogOut}>Logout</button>
        </ul>
      </nav>
      <ToastContainer />
    </>
  );
};

export default NavBar;
