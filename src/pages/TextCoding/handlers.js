import { toast } from 'react-hot-toast';
import { axios } from '../../utils/axios';

export const getExperiencia = async (experiencia, setExperiencia, code, setCode, id) => {
  try {
    setExperiencia({ ...experiencia, loading: true });

    const promise = axios.get(`/experiencia/${id}`);

    toast.promise(promise, {
      loading: 'Cargando...',
      success: '¡Ya se puede jugar!',
      error: 'Ocurrio al buscar la partida.',
    });

    const { data } = await promise;

    setCode({ ...code, body: data?.solucion });
    setExperiencia({ ...experiencia, data, loading: false });
  } catch (error) {
    setExperiencia({ ...experiencia, error, loading: false });
  }
};
