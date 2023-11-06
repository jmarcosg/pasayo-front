import io from 'socket.io-client';
import { toast } from 'react-hot-toast';
import { axios } from '../../utils/axios';
import { URL_SHARED_SESSION } from '../../utils/config';

const socket = io(URL_SHARED_SESSION);

export const getExperiencia = async (experiencia, setExperiencia, code, setCode, id) => {
  try {
    setExperiencia({ ...experiencia, loading: true });

    const promise = axios.get(`/experiencia/${id}`);

    toast.promise(promise, {
      loading: 'Cargando...',
      success: '¡A jugar!',
      error: 'Ocurrio al buscar la partida.',
    });

    const { data } = await promise;

    setCode({ ...code, body: data?.solucion });
    setExperiencia({ ...experiencia, data, loading: false });
  } catch (error) {
    setExperiencia({ ...experiencia, error, loading: false });
  }
};

export const createSession = async (session, setSession, id) => {
  try {
    setSession({ ...session, loading: true });

    const promise = axios.post('/session', { id_experiencia: id });

    toast.promise(promise, {
      loading: 'Creando sesión...',
      success: '¡Sesión creada!',
      error: 'Ocurrio al crear la sesión.',
    });

    const { data } = await promise;

    setSession({ ...session, data, loading: false });
  } catch (error) {
    setSession({ ...session, error, loading: false });
  }
};

export const joinSession = async (session, setSession, id) => {
  try {
    setSession({ ...session, loading: true });

    const promise = axios.get(`/session/${id}`);

    toast.promise(promise, {
      loading: 'Uniendose a sesión...',
      success: '¡Me uní a la sesión!',
      error: 'Ocurrio al unirme a la sesión.',
    });

    const { data } = await promise;

    setSession({ ...session, data, loading: false });
  } catch (error) {
    setSession({ ...session, error, loading: false });
  }
};
