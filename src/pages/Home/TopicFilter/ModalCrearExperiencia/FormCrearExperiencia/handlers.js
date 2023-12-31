import { toast } from 'react-hot-toast';
import { axios } from '../../../../../utils/axios';
import {
  addIsInvalidClass,
  addIsValidClass,
  removeIsInvalidClass,
  removeIsValidClass,
} from '../../../../../utils/validations';

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

export const tiposExperiencias = [
  { name: 'TEXTO', value: 'TEXTO' },
  { name: 'BLOQUES', value: 'BLOQUES' },
];

export const removeInvalidClasses = (field) => {
  const remInvalid = removeIsInvalidClass;

  if (field === 'id_trayecto') remInvalid(['#label-id_trayecto', '#id_trayecto']);
  if (field === 'titulo') remInvalid(['#label-titulo', '#titulo']);
  if (field === 'narrativa') remInvalid(['#label-narrativa', '#narrativa']);
  if (field === 'solucion') remInvalid(['#label-solucion', '#solucion']);
  if (field === 'objetivo') remInvalid(['#label-objetivo', '#objetivo']);
  if (field === 'tema') remInvalid(['#label-tema', '#tema']);
  if (field === 'tipo') remInvalid(['#label-tipo', '#tipo']);
};

export const removeValidClasses = (field) => {
  const remValid = removeIsValidClass;

  if (field === 'id_trayecto') remValid(['#label-id_trayecto', '#id_trayecto']);
  if (field === 'titulo') remValid(['#label-titulo', '#titulo']);
  if (field === 'narrativa') remValid(['#label-narrativa', '#narrativa']);
  if (field === 'solucion') remValid(['#label-solucion', '#solucion']);
  if (field === 'objetivo') remValid(['#label-objetivo', '#objetivo']);
  if (field === 'tema') remValid(['#label-tema', '#tema']);
  if (field === 'tipo') remValid(['#label-tipo', '#tipo']);
};

/** deshabilita el envio de informacion y muestra los errores */
export const validateData = (experienciaBody) => {
  let validData = true;

  const messages = [];

  if (experienciaBody.id_trayecto === '') {
    addIsInvalidClass(['#label-id_trayecto', '#id_trayecto']);
    messages.push('Debe seleccionar un trayecto');
    validData = false;
  } else {
    addIsValidClass(['#label-id_trayecto', '#id_trayecto']);
  }

  if (experienciaBody.titulo === '') {
    addIsInvalidClass(['#label-titulo', '#titulo']);
    messages.push('Debe ingresar el titulo');
    validData = false;
  } else {
    addIsValidClass(['#label-titulo', '#titulo']);
  }

  if (experienciaBody.narrativa === '') {
    addIsInvalidClass(['#label-narrativa', '#narrativa']);
    messages.push('Debe ingresar la narrativa');
    validData = false;
  } else {
    addIsValidClass(['#label-narrativa', '#narrativa']);
  }

  if (experienciaBody.tema === 'TEXTO' && experienciaBody.solucion === '') {
    addIsInvalidClass(['#label-solucion', '#solucion']);
    messages.push('Debe ingresar una solución');
    validData = false;
  } else {
    addIsValidClass(['#label-solucion', '#solucion']);
  }

  if (experienciaBody.objetivo === '') {
    addIsInvalidClass(['#label-objetivo', '#objetivo']);
    messages.push('Debe ingresar el objetivo');
    validData = false;
  } else {
    addIsValidClass(['#label-objetivo', '#objetivo']);
  }

  if (experienciaBody.tema === '') {
    addIsInvalidClass(['#label-tema', '#tema']);
    messages.push('Debe seleccionar un tema');
    validData = false;
  } else {
    addIsValidClass(['#label-tema', '#tema']);
  }

  if (experienciaBody.tipo === '') {
    addIsInvalidClass(['#label-tipo', '#tipo']);
    messages.push('Debe seleccionar un tipo');
    validData = false;
  } else {
    addIsValidClass(['#label-tipo', '#tipo']);
  }

  /* Mostramos los mensajes */
  messages.forEach((msg) => toast.error(msg));

  return validData;
};

export const handlerSendData = async (experiencia, setExperiencia) => {
  setExperiencia({ ...experiencia, sent: false, loading: true });

  const promise = axios.post(`/experiencia`, experiencia.body);

  toast.promise(promise, {
    loading: 'Creando...',
    success: '¡Experiencia creada correctamente!',
    error: 'Ocurrio un error al crear la experiencia.',
  });

  const result = await promise;

  if (result.status === 200) {
    setExperiencia({ ...experiencia, sent: true, loading: false });
  } else {
    setExperiencia({ ...experiencia, loading: false });
  }
};
