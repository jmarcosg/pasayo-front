import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserAuth } from '../../context';
import { Input } from '../../components';
import { registerSchema } from '../../schemas/auth';

const Register = ({ setSelectedAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { signup, errors: loginErrors } = useUserAuth();

  const onSubmit = (data) => signup(data) && setSelectedAuth('login');

  return (
    <>
      {loginErrors.map((error, i) => (
        <span key={i}>{error}</span>
      ))}

      <form className='p-4' onSubmit={handleSubmit(onSubmit)}>
        <Input
          id='mail'
          label='Correo'
          name='mail'
          placeholder='usuario@correo.com'
          {...register('mail', { required: true })}
        />
        <p>{errors.mail?.message}</p>

        <Input
          id='username'
          label='Usuario'
          name='username'
          placeholder='usuario'
          {...register('username', { required: true })}
        />
        <p>{errors.username?.message}</p>

        <Input
          id='password'
          label='Contraseña'
          name='password'
          placeholder='********'
          type='password'
          {...register('password', { required: true, minLength: 6 })}
        />
        <p>{errors.password?.message}</p>

        <div className='d-flex justify-content-center mt-3'>
          <button className='btn btn-success w-100' type='submit'>
            <i className='bi bi-person-fill-add' /> Crear Cuenta
          </button>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <a className='btn btn-violet w-100' role='button' onClick={() => setSelectedAuth('login')}>
            <i className='bi bi-box-arrow-in-right' /> Ya tengo cuenta, ingresar
          </a>
        </div>
      </form>
    </>
  );
};

export default Register;
