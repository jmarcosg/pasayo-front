import { axios } from '../../../utils/axios';

export const topics = [
  { name: 'TODOS', value: 'TODOS' },
  { name: 'SECUENCIAS', value: 'SECUENCIAS' },
  { name: 'MODULARIDAD', value: 'MODULARIDAD' },
  { name: 'ALTERNATIVAS', value: 'ALTERNATIVAS' },
  { name: 'REPETITIVAS', value: 'REPETITIVAS' },
];

export const authors = [
  { name: 'TODAS', value: 'TODAS' },
  { name: 'MIAS', value: 'MIAS' },
];

export const types = [
  { name: 'TODOS', value: 'TODOS' },
  { name: 'TEXTO', value: 'TEXTO' },
  { name: 'BLOQUES', value: 'BLOQUES' },
];

export const getFilteredExperiencias = async (experiences, setExperiences, selectedFilter) => {
  try {
    setExperiences({ ...experiences, loading: true });

    const { data } = await axios.get(
      `/experiencias?tema=${selectedFilter.topic}&autor=${selectedFilter.author}&titulo=${selectedFilter.title}&tipo=${selectedFilter.type}&limite=10`
    );

    setExperiences({ ...experiences, data, loading: false });
  } catch (error) {
    setExperiences({ ...experiences, error, loading: false });
  }
};
