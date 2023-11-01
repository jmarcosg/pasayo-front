import { useEffect, useState } from 'react';
import { handlerSendData, temasTrayectos, validateData } from './handlers';
import { getSession } from '../../../../../utils/auth';

const FormCrearTrayecto = ({ setModalTitle, toggleModal }) => {
  const { username } = getSession();
  const [trayecto, setTrayecto] = useState({
    body: {
      titulo: '',
      narrativa: '',
      objetivo: '',
      tema: '',
      user: username,
    },
    loading: false,
    error: null,
  });

  const handleBodyChange = (e) => {
    setTrayecto({ ...trayecto, body: { ...trayecto.body, [e.target.name]: e.target.value } });
  };

  const sendData = () => {
    if (validateData(trayecto.body)) {
      handlerSendData(trayecto, setTrayecto);
    }
  };

  useEffect(() => {
    setModalTitle('Crear Nuevo Trayecto');
  }, []);

  return (
    <>
      <form className='mt-2 px-4'>
        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='titulo' id='label-titulo'>
              Título
            </label>
            <div className='input-group'>
              <input
                aria-describedby='input-titulo form-exp'
                className='form-control'
                disabled={trayecto.loading}
                id='titulo'
                name='titulo'
                placeholder='Ingresá un Título'
                type='text'
                onChange={handleBodyChange}
              />
            </div>
            <div className='form-text' id='input-titulo'>
              Una frase corta y clara para identificar el trayecto.
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='narrativa' id='label-narrativa'>
              Narrativa
            </label>
            <div className='form-floating'>
              <textarea
                className='form-control'
                disabled={trayecto.loading}
                id='narrativa'
                name='narrativa'
                placeholder='Ingresá una narrativa para esta experiencia'
                rows={3}
                style={{ height: '100px' }}
                onChange={handleBodyChange}
              />
              <label className='text-body-secondary' htmlFor='narrativa'>
                Ingresá una narrativa para este trayecto
              </label>
            </div>
            <div className='form-text' id='input-titulo'>
              La narrativa es el marco de sentido para la experiencia. Puede ser un relato o simplemente una descripción
              breve de las narrativas involucradas.
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='objetivo' id='label-objetivo'>
              Objetivo Didáctico
            </label>
            <div className='form-floating'>
              <textarea
                className='form-control'
                disabled={trayecto.loading}
                id='objetivo'
                name='objetivo'
                placeholder='Ingresá un objetivo didáctico para este trayecto'
                rows={3}
                style={{ height: '100px' }}
                onChange={handleBodyChange}
              />
              <label className='text-body-secondary' htmlFor='plantilla'>
                Ingresá un objetivo didáctico para este trayecto
              </label>
            </div>
            <div className='form-text' id='input-titulo'>
              ¿Cuál aspecto disciplinar se espera que sea abordado desde este trayecto?
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='tema' id='label-tema'>
              Tema
            </label>
            <div className='form-floating'>
              <select
                aria-label='Select tema trayecto'
                className='form-select'
                defaultValue={'default'}
                disabled={trayecto.loading}
                id='tema'
                name='tema'
                onChange={handleBodyChange}
              >
                <option disabled value='default' />
                {temasTrayectos.map((tema) => (
                  <option key={tema.value} value={tema.value}>
                    {tema.name}
                  </option>
                ))}
              </select>
              <label className='form-label fw-bold' htmlFor='tema'>
                Indicá el tema de tu trayecto
              </label>
            </div>
          </div>
        </div>

        <div className='row mt-5 px-2'>
          <div className='col d-flex justify-content-end'>
            <button className='btn btn-danger me-2' disabled={trayecto.loading} type='button' onClick={toggleModal}>
              Cancelar
            </button>
            <button className='btn btn-warning' disabled={trayecto.loading} type='button' onClick={sendData}>
              Crear
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCrearTrayecto;
