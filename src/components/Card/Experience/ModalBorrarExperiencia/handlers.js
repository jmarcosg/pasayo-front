import { axios } from '../../../../utils/axios';

export const deleteExperience = async (experienceID, setIsDeleting, toggleModal) => {
  try {
    setIsDeleting(true);

    const body = {
      id: experienceID,
      activo: 'false',
    };

    const { data } = await axios.put(`/experiencia`, body);

    if (data) {
      setIsDeleting(false);
      toggleModal();
      location.reload();
    }

    setIsDeleting(false);
  } catch (error) {
    setIsDeleting(false);
  }
};
