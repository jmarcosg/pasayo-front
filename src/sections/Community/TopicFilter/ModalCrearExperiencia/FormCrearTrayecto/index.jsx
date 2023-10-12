import { useEffect } from 'react';
import { temasTrayectos } from './handlers';

const FormCrearTrayecto = ({ setModalTitle, toggleModal }) => {
  useEffect(() => {
    setModalTitle('Crear Nuevo Trayecto');
  }, []);

  return (
    <>
      <form className='mt-2 px-4'>
        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='titulo'>
              Título
            </label>
            <div className='input-group'>
              <input
                aria-describedby='input-titulo form-exp'
                className='form-control'
                id='titulo'
                name='titulo'
                placeholder='Ingresá un Título'
                type='text'
              />
            </div>
            <div className='form-text' id='input-titulo'>
              Una frase corta y clara para identificar el trayecto.
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='narrativa'>
              Narrativa
            </label>
            <div className='form-floating'>
              <textarea
                className='form-control'
                id='narrativa'
                placeholder='Ingresá una narrativa para esta experiencia'
                rows={3}
                style={{ height: '100px' }}
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
            <label className='form-label fw-bold' htmlFor='objetivo-didactico'>
              Objetivo Didáctico
            </label>
            <div className='form-floating'>
              <textarea
                className='form-control'
                id='objetivo-didactico'
                placeholder='Ingresá un objetivo didáctico para este trayecto'
                rows={3}
                style={{ height: '100px' }}
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

        <div className='row mt-2 px-3'>
          <select aria-label='Select tema trayecto' className='form-select' defaultValue={'default'}>
            <option disabled placeholder='Indicá el tema de tu trayecto' value={'default'}>
              Indicá el tema de tu trayecto
            </option>
            {temasTrayectos.map((tema) => (
              <option key={tema.value} value={tema.value}>
                {tema.name}
              </option>
            ))}
          </select>
        </div>

        <div className='row mt-5 px-2'>
          <div className='col d-flex justify-content-end'>
            <button className='btn btn-danger me-2' type='button' onClick={toggleModal}>
              Cancelar
            </button>
            <button className='btn btn-warning' type='submit'>
              Crear
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormCrearTrayecto;
