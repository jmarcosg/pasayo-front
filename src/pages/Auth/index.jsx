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
          <img alt='Banner Pasayo' className='card-img-top' src='https://i.stack.imgur.com/y9DpT.jpg' />
          <div className='card-body'>
            {selectedAuth === 'login' && <Login setSelectedAuth={setSelectedAuth} />}
            {selectedAuth === 'register' && <Register setSelectedAuth={setSelectedAuth} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
