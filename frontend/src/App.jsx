import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Stats from './pages/stats/Stats';
import RefreshHandler from './RefreshHandler';
import { useState } from 'react';
import AuthLayout from './Layouts/authLayout/AuthLayout';
import AppLayout from './Layouts/appLayout/AppLayout';
import Support from './pages/support/Support';
import Services from './pages/services/Services';
import Dashboard from './components/dashboard/Dashboard';
import About from './pages/about/About';
import LandingPage from './pages/landingPage/landingPage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Private route to ensure user authentication
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>

        <Route element={<AuthLayout />}>
          {/* <Route path="/" element={<Lan} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>


        <Route element={<AppLayout />}>
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<PrivateRoute element={<Support />} />} />
          <Route path="/services" element={<PrivateRoute element={<Services />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
        </Route>


        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
