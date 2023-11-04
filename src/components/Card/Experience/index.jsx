import { useState } from 'react';
import { getSession } from '../../../utils/auth';
import ModalBorrarExperiencia from './ModalBorrarExperiencia';
import { Link } from 'react-router-dom';

const ExperiencieCard = ({ data }) => {
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
        <li className='list-group-item'>
          <span className='fw-bold'>Objetivo Didáctico:</span> {data?.objetivo}
        </li>
        <li className='list-group-item'>
          <span className='fw-bold'>Tema:</span> {data?.tema}
        </li>
      </ul>

      <div className='d-grid gap-3'>
        <div aria-label='Acciones Experiencia' className='btn-group' role='group'>
          <button className='btn btn-warning rounded-0' type='button'>
            <i className='bi bi-puzzle' />
          </button>
          <Link to={`/texto/${data._id}`}>
            <button className='btn btn-warning rounded-0' type='button'>
              <i className='bi bi-code-square' />
            </button>
          </Link>

          <button className='btn btn-warning rounded-0' type='button'>
            <i className='bi bi-eye' />
          </button>
          {data?.user === username && (
            <button className='btn btn-danger rounded-0' type='button' onClick={toggleModalBorrar}>
              <i className='bi bi-trash' />
            </button>
          )}
        </div>
      </div>

      <div className='card-body text-bg-light d-flex justify-content-end gap-2'>
        <span className='badge text-bg-secondary d-flex gap-1'>
          <i className='bi bi-signpost-fill' />
          {data?.trayecto[0]?.tema}
        </span>
        <span className='badge text-bg-danger d-flex gap-1'>
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
