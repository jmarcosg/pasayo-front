import { toast } from 'react-hot-toast';
import { axios } from '../../utils/axios';

export const register = async (user) => {
  const promise = axios.post(`/register`, user);

  toast.promise(promise, {
    loading: 'Registrando...',
    success: '¡Registro exitoso!',
    error: 'Ocurrio al registrarse',
  });

  const { data } = await promise;

  return data;
};

export const login = async (user) => {
  const promise = axios.post(`/login`, user);

  toast.promise(promise, {
    loading: 'Entrando...',
    success: `¡Hola ${user.username}!`,
    error: 'Credenciales incorrectas',
  });

  const { data } = await promise;

  return data;
};

export const verifyToken = async (token) => {
  const promise = axios.get(`/verify`, token);

  const { data } = await promise;

  return data;
};
