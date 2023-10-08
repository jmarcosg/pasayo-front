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

export const getData = async (state, setState) => {
  try {
    setState((state) => ({ ...state, loading: true }));

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    setState((state) => ({ ...state, data, loading: false }));
  } catch (error) {
    setState((state) => ({ ...state, error, loading: false }));
  }
};
