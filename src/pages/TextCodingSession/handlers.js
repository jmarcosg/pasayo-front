import io from 'socket.io-client';
import { toast } from 'react-hot-toast';
import { axios } from '../../utils/axios';
import { URL_BACK } from '../../utils/config';

const socket = io(URL_BACK);

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

export const createSession = async (session, setSession, id, user) => {
  try {
    setSession({ ...session, loading: true });

    const promise = axios.post('/session', { id_experiencia: id, user });

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

    if (!session.data) {
      const getSession = axios.get(`/session/${id}`);

      toast.promise(getSession, {
        loading: 'Obteniendo sesión...',
        success: '¡Obtuve la sesión!',
        error: 'Ocurrio al obtener a la sesión.',
      });

      const { data } = await getSession;

      setSession({ ...session, data });
    }

    const joinRoom = () => {
      socket.emit('user_join_room', { session: session.data._id, user: session.data.user });
    };

    // toast.promise(joinRoom, {
    //   loading: 'Uniendome a la sesión...',
    //   success: '¡Me uní a la sesión!',
    //   error: 'Ocurrio al unirme a la sesión.',
    // });

    setSession({ ...session, loading: false });
  } catch (error) {
    setSession({ ...session, error, loading: false });
  }
};

export const disconnectSession = async (session, setSession) => {
  try {
    setSession({ ...session, loading: true });

    const promise = axios.delete(`/session/${session.data._id}`);

    toast.promise(promise, {
      loading: 'Desconectando...',
      success: '¡Desconectado!',
      error: 'Ocurrio al desconectarme.',
    });

    await promise;

    setSession({ ...session, data: null, loading: false });
  } catch (error) {
    setSession({ ...session, error, loading: false });
  }
};
