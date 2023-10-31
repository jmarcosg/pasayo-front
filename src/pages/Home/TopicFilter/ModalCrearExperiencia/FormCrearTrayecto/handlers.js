import { axios } from '../../../../../utils/axios';

export const temasTrayectos = [
  { name: 'SECUENCIAS', value: 'SECUENCIAS' },
  { name: 'MODULARIDAD', value: 'MODULARIDAD' },
  { name: 'ALTERNATIVAS', value: 'ALTERNATIVAS' },
  { name: 'REPETITIVAS', value: 'REPETITIVAS' },
];

export const createTrayecto = async (trayecto, setTrayecto) => {
  try {
    setTrayecto({ ...trayecto, loading: true });

    // const { data } = await axios.post(`/trayecto`, trayecto.body);

    setTrayecto({ ...trayecto, loading: false });
    // setTrayecto({ ...trayecto, data, loading: false });
  } catch (error) {
    // setTrayecto({ ...trayecto, error, loading: false });
    setTrayecto({ ...trayecto, error, loading: false });
  }
};
