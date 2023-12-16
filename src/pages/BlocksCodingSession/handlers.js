import { toast } from 'react-hot-toast';
import { axios } from '../../utils/axios';

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

    const promise = axios.post('/session', {
      id_experiencia: id,
      user,
      codigo: '',
      observacion: '',
      estado_observacion: '',
    });

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

export const saveCode = async (session, setSession, code) => {
  try {
    setSession({ ...session, loading: true });

    const promise = axios.put(`/session`, {
      id: session.data._id,
      id_experiencia: session.data._id,
      codigo: code.body,
    });

    toast.promise(promise, {
      loading: 'Guardando sesión...',
      success: '¡Sesión guardada!',
      error: 'Ocurrio al guardar la sesión.',
    });

    await promise;

    setSession({ ...session, loading: false });
  } catch (error) {
    setSession({ ...session, error, loading: false });
  }
};
