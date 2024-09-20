import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./signup.css";
import { handleError, handleSuccess } from "../../utils";

const Signup = () => {

  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo};
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if(!name || !email || !password) {
      return handleError("Please fill all the fields");
    }
    try {
      const url = "http://localhost:8080/auth/signup";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await res.json();
      const { success, message, error } = result;
      if(success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      }else if(error){
        const details = error?.details[0]?.message;
        handleError(details);
      }else if(!success) {
        handleError(message);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name..."
            onChange={handleChange}
            value={signupInfo.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            onChange={handleChange}
            value={signupInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            onChange={handleChange}
            value={signupInfo.password}
          />
        </div>
        <button type="submit">Sign Up</button>
        <span>
          Already have an account ?<Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
