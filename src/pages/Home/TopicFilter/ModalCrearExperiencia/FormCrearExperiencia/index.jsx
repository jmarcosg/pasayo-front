import { useEffect, useState } from 'react';
import { getTiposTrayectos, temasExperiencias } from './handlers';

const FormCrearExperiencia = ({ setModalTitle, toggleModal }) => {
  const [trayecto, setTrayecto] = useState({
    data: null,
    selected: 'default',
    loading: false,
    error: null,
  });

  useEffect(() => {
    setModalTitle('Crear Nueva Experiencia');

    getTiposTrayectos(trayecto, setTrayecto);
  }, []);

  return (
    <>
      <span>Si esta Experiencia pertenece a un Trayecto, por favor, seleccionalo</span>

      <form className='mt-2 px-4'>
        <div className='row mt-2'>
          <div className='mb-2'>
            <label className='form-label fw-bold' htmlFor='trayecto' id='label-trayecto'>
              Trayecto
            </label>
            <div className='form-floating'>
              <select
                aria-label='Selección Trayecto'
                className='form-select'
                defaultValue={'default'}
                id='trayecto'
                name='trayecto'
              >
                <option disabled placeholder='Seleccioná un trayecto' value={'default'} />
                {trayecto.data &&
                  trayecto.data.map((trayecto) => (
                    <option key={trayecto._id} value={trayecto._id}>
                      {trayecto.titulo}
                    </option>
                  ))}
              </select>
              <label className='form-label fw-bold' htmlFor='trayecto'>
                Seleccioná un trayecto
              </label>
            </div>
          </div>
        </div>

        <div className='row mt-2 px-4'>
          <div className='alert alert-warning mb-0' role='alert'>
            <h4 className='alert-heading d-flex gap-2 align-items-center'>
              <i className='bi bi-info-circle-fill' />
              <span>Atención</span>
            </h4>
            <p className='mb-0'>
              Los <span className='fw-bold'>Trayectos</span> agrupan Experiencias didácticamente relacionadas entre sí.
              Podés agrupar esta Experiencia en un <span className='fw-bold'>Trayecto</span> ya existente o bien podés
              crear uno nuevo.
            </p>
          </div>
        </div>

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
              Una frase corta y clara para identificar la experiencia.
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
                Ingresá una narrativa para esta experiencia
              </label>
            </div>
            <div className='form-text' id='input-titulo'>
              La narrativa es el marco de sentido para la experiencia. Tratá de que sea lo más clara y concisa posible.
            </div>
          </div>
        </div>

        <div className='row mt-2'>
          <div className='mb-3'>
            <label className='form-label fw-bold' htmlFor='plantilla'>
              Plantilla
            </label>
            <div className='form-floating'>
              <textarea
                className='form-control'
                id='plantilla'
                placeholder='Ingresá una plantilla para esta experiencia'
                rows={3}
                style={{ height: '100px' }}
              />
              <label className='text-body-secondary' htmlFor='plantilla'>
                Ingresá una plantilla para esta experiencia
              </label>
            </div>
            <div className='form-text' id='input-titulo'>
              La plantilla debe tomar la forma de comentarios que estructuren la solución.
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
                placeholder='Ingresá un objetivo didáctico para esta experiencia'
                rows={3}
                style={{ height: '100px' }}
              />
              <label className='text-body-secondary' htmlFor='plantilla'>
                Ingresá un objetivo didáctico para esta experiencia
              </label>
            </div>
            <div className='form-text' id='input-titulo'>
              ¿Cuál aspecto disciplinar se espera que sea abordado desde esta experiencia?
            </div>
          </div>
        </div>

        <div className='row mt-2 px-3'>
          <select aria-label='Select tema experiencia' className='form-select' defaultValue={'default'}>
            <option disabled placeholder='Indicá el tema de tu experiencia' value={'default'}>
              Indicá el tema de tu experiencia
            </option>
            {temasExperiencias.map((tema) => (
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

export default FormCrearExperiencia;
