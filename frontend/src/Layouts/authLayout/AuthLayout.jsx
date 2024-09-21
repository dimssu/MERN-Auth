import React from 'react';
import { Outlet } from 'react-router-dom';
import './authLayout.css';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
