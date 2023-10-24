import { axios } from '../../utils/axios';

export const getExperiencias = async (state, setState) => {
  try {
    setState({ ...state, loading: true });

    const { data } = await axios.get(`/experiencias?tema=&autor=&titulo=&limite=10`);

    setState({ ...state, data, loading: false });
  } catch (error) {
    setState({ ...state, error, loading: false });
  }
};
