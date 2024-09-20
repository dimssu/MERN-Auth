import { useEffect, useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../../utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setLoggedInUser(user);
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logged out successfully');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  }

  return (
    <div>
      {loggedInUser && <h1>Welcome {loggedInUser}</h1>}
      <button onClick={handleLogOut}>Logout</button>

      <ToastContainer />
    </div>
  )
}

export default Home
