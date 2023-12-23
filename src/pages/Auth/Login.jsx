import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserAuth } from '../../context';
import { Input } from '../../components';
import { loginSchema } from '../../schemas/auth';

const Login = ({ setSelectedAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors } = useUserAuth();

  const onSubmit = (data) => signin(data);

  return (
    <>
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
          <button className='btn btn-success w-100' type='submit'>
            <i className='bi bi-box-arrow-in-right' /> Entrar
          </button>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <a className='btn btn-secondary w-100' role='button' onClick={() => setSelectedAuth('register')}>
            <i className='bi bi-person-fill-add' /> No tengo cuenta
          </a>
        </div>
      </form>
    </>
  );
};

export default Login;
