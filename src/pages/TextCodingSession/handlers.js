import { toast } from 'react-hot-toast';
import copy from 'copy-to-clipboard';
import { axios } from '../../utils/axios';

export const getExperiencia = async (experiencia, setExperiencia, id) => {
  try {
    setExperiencia({ ...experiencia, loading: true });

    const promise = axios.get(`/experiencia/${id}`);

    toast.promise(promise, {
      loading: 'Cargando...',
      success: '¡A jugar!',
      error: 'Ocurrio al buscar la partida.',
    });

    const { data } = await promise;

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

export const joinSession = async (session, setSession, id) => {
  try {
    setSession({ ...session, loading: true });

    // const resp = await socket.emit('user_join_room', { session: id, user: session.data.user });

    // console.log(joinRoom);

    // if (joinRoom.connected && joinRoom.id === id) {
    //   toast.success('¡Me uní a la sesión!');
    // } else {
    //   toast.error('Ocurrio al unirme a la sesión.');
    // }

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

export const copyToClipboard = (sharedSessionLink) => {
  let isCopy = copy(sharedSessionLink);

  if (isCopy) {
    toast.success('Tu link se copió en el portapapeles. Podes hacer click derecho y seleccionar la opción PEGAR.');
  }
};
