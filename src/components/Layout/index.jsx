import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import { useUserAuth } from '../../context';

const Layout = () => {
  const { isAuthenticated } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className='container'>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
