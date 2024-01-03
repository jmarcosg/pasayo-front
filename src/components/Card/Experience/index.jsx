import { useState } from 'react';
import { getSession } from '../../../utils/auth';
import ModalBorrarExperiencia from './ModalBorrarExperiencia';
import { Link } from 'react-router-dom';

const ExperiencieCard = ({ data, room }) => {
  const { username } = getSession();
  const [showModalBorrarExperiencia, setShowModalBorrarExperiencia] = useState(false);

  const toggleModalBorrar = () => setShowModalBorrarExperiencia(!showModalBorrarExperiencia);

  return (
    <div className='card' style={{ minWidth: '18rem', maxWidth: '100%' }}>
      <div className='card-body text-bg-light rounded-top'>
        <h5 className='card-title fw-bold'>{data?.titulo}</h5>
        <p className='card-text text-wrap fst-italic'>&quot;{data?.narrativa}&quot;</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item d-flex gap-2 text-secondary'>
          <i className='bi bi-bullseye text-dark' />
          {data?.objetivo}
        </li>
        <li className='list-group-item d-flex gap-2'>
          <span className='badge text-bg-secondary d-flex gap-1 rounded-pill user-select-none'>
            <i className='bi bi-circle-fill' />
            {data?.tema}
          </span>

          <span className='badge text-bg-secondary d-flex gap-1 rounded-pill user-select-none'>
            <i className='bi bi-signpost-fill' />
            {data?.trayecto[0]?.tema.toUpperCase()}
          </span>
        </li>
      </ul>

      <div className='d-grid gap-3'>
        <div aria-label='Acciones Experiencia' className='btn-group' role='group'>
          {data?.tipo === 'TEXTO' && (
            <>
              <Link className='btn btn-violet rounded-0' to={`/texto/${data._id}`}>
                <i className='bi bi-eye-fill' />
              </Link>

              <Link className='btn btn-violet rounded-0' to={`/texto/${data._id}/usuario/${username}/sala/${room}`}>
                <i className='bi bi-play-fill' />
              </Link>
            </>
          )}

          {data?.tipo === 'BLOQUES' && (
            <Link className='btn btn-violet rounded-0' to={`/bloques/${data._id}`}>
              <i className='bi bi-play-fill' />
            </Link>
          )}

          {data?.user === username && (
            <button className='btn btn-danger rounded-0' type='button' onClick={toggleModalBorrar}>
              <i className='bi bi-trash' />
            </button>
          )}
        </div>
      </div>

      <div className='card-body text-bg-light d-flex flex-wrap justify-content-end gap-2'>
        <span className='badge text-bg-dark d-flex gap-1 rounded-pill user-select-none'>
          {data?.tipo === 'BLOQUES' && <i className='bi bi-puzzle-fill' />}

          {data?.tipo === 'TEXTO' && <i className='bi bi-code-slash' />}
          {data?.tipo}
        </span>

        <span className='badge text-bg-dark d-flex gap-1 rounded-pill user-select-none'>
          <i className='bi bi-person-fill' />
          {data?.user}
        </span>
      </div>

      <ModalBorrarExperiencia
        data={data}
        setShowModal={setShowModalBorrarExperiencia}
        showModal={showModalBorrarExperiencia}
        toggleModal={toggleModalBorrar}
      />
    </div>
  );
};

export default ExperiencieCard;
