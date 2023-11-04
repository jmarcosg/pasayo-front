import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserAuth } from '../../context';
import { Input } from '../../components';
import { loginSchema } from '../../schemas/auth';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useUserAuth();

  const onSubmit = (data) => signin(data);

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
            {loginErrors.map((error, i) => (
              <span key={i}>{error}</span>
            ))}

            <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
              <Input
                id='username'
                label='Usuario'
                name='username'
                placeholder='usuario'
                {...register('username', { required: true })}
              />
              <p>{errors.email?.message}</p>

              <Input
                id='password'
                label='Contraseña'
                name='password'
                placeholder='********'
                type='password'
                {...register('password', { required: true, minLength: 6 })}
              />
              <div className='d-flex justify-content-center mt-3'>
                <button className='btn btn-warning w-100' type='submit'>
                  <i className='bi bi-box-arrow-in-right' /> Entrar
                </button>
              </div>
              <div className='d-flex justify-content-center mt-3'>
                <a className='btn btn-warning w-100' role='button'>
                  <i className='bi bi-person-fill-add' /> Crear Cuenta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
