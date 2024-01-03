import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [selectedAuth, setSelectedAuth] = useState('login');
  const { isAuthenticated } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className='d-flex justify-content-center mt-5'>
        <div className='card' style={{ width: '22rem' }}>
          <div className='card-body'>
            {selectedAuth === 'login' && <Login setSelectedAuth={setSelectedAuth} />}
            {selectedAuth === 'register' && <Register setSelectedAuth={setSelectedAuth} />}
          </div>
        </div>
      </div>

      <div className='container alert alert-info mt-2' role='alert' style={{ width: '22rem' }}>
        <p className='mb-0'>
          <span className='fw-bold'>PASAYO</span> es una plataforma comunitaria para aprender programación para niñas y
          niños en el espectro autista.
        </p>
      </div>
    </>
  );
};

export default Auth;
