import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { getSession, isValidSession } from '../../utils/auth';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isValidSession()) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Navbar userData={getSession()} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
