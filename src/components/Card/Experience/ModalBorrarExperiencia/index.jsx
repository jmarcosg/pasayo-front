import { useState } from 'react';
import Modal from '../../../Modal';
import { deleteExperience } from './handlers';

const ModalBorrarExperiencia = ({ data, showModal, toggleModal }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <Modal setShow={toggleModal} show={showModal} size={'lg'} title={() => '¡Atención!'}>
      <div className='row'>
        <div className='d-flex justify-content-center'>
          <div className='alert alert-danger' role='alert'>
            <span className='fw-bold'>¡Estás por borrar ésta experiencia definitivamente!</span>
          </div>
        </div>
      </div>

      <div className='mt-2 px-4'>
        <div className='card text-center'>
          <div className='card-header'>{data?.titulo}</div>
          <div className='card-body'>
            <h5 className='card-title'>{data?.objetivo}</h5>
            <p className='card-text text-wrap fst-italic'>{data?.narrativa}</p>
          </div>
          <div className='card-footer text-body-secondary d-flex justify-content-center gap-2'>
            <span className='badge text-bg-secondary d-flex gap-1'>
              <i className='bi bi-signpost-fill' />
              {data?.tema}
            </span>
            <span className='badge text-bg-danger d-flex gap-1'>
              <i className='bi bi-person-fill' />
              {data?.user}
            </span>
          </div>
        </div>

        <div className='row mt-4 px-2'>
          <div className='col d-flex justify-content-end'>
            <button className='btn btn-secondary me-2' disabled={isDeleting} type='button' onClick={toggleModal}>
              Cancelar
            </button>
            <button
              className='btn btn-danger'
              disabled={isDeleting}
              type='button'
              onClick={() => deleteExperience(data?._id, setIsDeleting, toggleModal)}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBorrarExperiencia;
