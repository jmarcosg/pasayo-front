import { axios } from '../../../../../utils/axios';

export const getTiposTrayectos = async (state, setState) => {
  try {
    setState((state) => ({ ...state, loading: true }));

    const { data } = await axios.get(`/tiposTrayectos`);

    setState((state) => ({ ...state, data, loading: false }));
  } catch (error) {
    setState((state) => ({ ...state, error, loading: false }));
  }
};

export const temasExperiencias = [
  { name: 'SECUENCIAS', value: 'SECUENCIAS' },
  { name: 'MODULARIDAD', value: 'MODULARIDAD' },
  { name: 'ALTERNATIVAS', value: 'ALTERNATIVAS' },
  { name: 'REPETITIVAS', value: 'REPETITIVAS' },
];
