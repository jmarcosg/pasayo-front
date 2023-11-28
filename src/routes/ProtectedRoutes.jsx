import { Navigate, Outlet } from 'react-router-dom';
import { useUserAuth } from '../context/UserWrapper';

const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useUserAuth();

  if (loading)
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-warning' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>
      </div>
    );

  if (!isAuthenticated && !loading) return <Navigate replace to='/login' />;

  return <Outlet />;
};

export default ProtectedRoutes;
