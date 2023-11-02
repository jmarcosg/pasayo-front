import { toast } from 'react-hot-toast';
import { axios } from '../../../../../utils/axios';
import {
  addIsInvalidClass,
  addIsValidClass,
  removeIsInvalidClass,
  removeIsValidClass,
} from '../../../../../utils/validations';

export const temasTrayectos = [
  { name: 'SECUENCIAS', value: 'SECUENCIAS' },
  { name: 'MODULARIDAD', value: 'MODULARIDAD' },
  { name: 'ALTERNATIVAS', value: 'ALTERNATIVAS' },
  { name: 'REPETITIVAS', value: 'REPETITIVAS' },
];

export const removeInvalidClasses = (field) => {
  const remInvalid = removeIsInvalidClass;

  if (field === 'titulo') remInvalid(['#label-titulo', '#titulo']);
  if (field === 'narrativa') remInvalid(['#label-narrativa', '#narrativa']);
  if (field === 'objetivo') remInvalid(['#label-objetivo', '#objetivo']);
  if (field === 'tema') remInvalid(['#label-tema', '#tema']);
};

export const removeValidClasses = (field) => {
  const remValid = removeIsValidClass;

  if (field === 'titulo') remValid(['#label-titulo', '#titulo']);
  if (field === 'narrativa') remValid(['#label-narrativa', '#narrativa']);
  if (field === 'objetivo') remValid(['#label-objetivo', '#objetivo']);
  if (field === 'tema') remValid(['#label-tema', '#tema']);
};

/** deshabilita el envio de informacion y muestra los errores */
export const validateData = (trayectoBody) => {
  let validData = true;

  const messages = [];

  if (trayectoBody.titulo === '') {
    addIsInvalidClass(['#label-titulo', '#titulo']);
    messages.push('Debe ingresar el titulo');
    validData = false;
  } else {
    addIsValidClass(['#label-titulo', '#titulo']);
  }

  if (trayectoBody.narrativa === '') {
    addIsInvalidClass(['#label-narrativa', '#narrativa']);
    messages.push('Debe ingresar la narrativa');
    validData = false;
  } else {
    addIsValidClass(['#label-narrativa', '#narrativa']);
  }

  if (trayectoBody.objetivo === '') {
    addIsInvalidClass(['#label-objetivo', '#objetivo']);
    messages.push('Debe ingresar el objetivo');
    validData = false;
  } else {
    addIsValidClass(['#label-objetivo', '#objetivo']);
  }

  if (trayectoBody.tema === '') {
    addIsInvalidClass(['#label-tema', '#tema']);
    messages.push('Debe ingresar el tema');
    validData = false;
  } else {
    addIsValidClass(['#label-tema', '#tema']);
  }

  /* Mostramos los mensajes */
  messages.forEach((msg) => toast.error(msg));

  return validData;
};

export const handlerSendData = async (trayecto, setTrayecto) => {
  setTrayecto({ ...trayecto, loading: true });

  const promise = axios.post(`/trayecto`, trayecto.body);

  toast.promise(promise, {
    loading: 'Creando...',
    success: '¡Trayecto creado correctamente!',
    error: 'Ocurrio un error al crear el trayecto.',
  });

  const result = await promise;

  if (result.status === 200) {
    setTrayecto({ ...trayecto, loading: false });
  } else {
    setTrayecto({ ...trayecto, loading: false });
  }
};
