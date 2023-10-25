import Modal from '../../../Modal';

const ModalBorrarExperiencia = ({ data, showModal, toggleModal }) => {
  return (
    <Modal setShow={toggleModal} show={showModal} size={'lg'} title={() => '¡Atención!'}>
      <div className='row'>
        <div className='d-flex justify-content-center'>
          <div className='alert alert-danger' role='alert'>
            <span className='fw-bold'>¡Estás por borrar ésta experiencia definitivamente!</span>
          </div>
        </div>
      </div>

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
          <button className='btn btn-secondary me-2' type='button' onClick={toggleModal}>
            Cancelar
          </button>
          <button className='btn btn-danger' type='button'>
            Borrar
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBorrarExperiencia;
