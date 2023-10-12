import { useState } from 'react';
import { Modal } from '../../../../components';
import FormCrearExperiencia from './FormCrearExperiencia';

const ModalCrearExperiencia = ({ showModal, toggleModal }) => {
  const [selectedForm, setSelectedForm] = useState(''); // experiencia | trayecto
  const [trayecto, setTrayecto] = useState({
    listado: null,
    selected: 'default',
    loading: false,
    error: null,
  });

  const handleFormSelection = (exp) => {
    // add active class to selected form
    setSelectedForm(exp);
  };

  return (
    <Modal setShow={toggleModal} show={showModal} size={'lg'} title={() => 'Crear Nueva Experiencia o Trayecto'}>
      <div className='row d-flex justify-content-center'>
        <div aria-label='Basic example' className='btn-group' role='group'>
          <button
            className={`btn btn-outline-warning ${selectedForm === 'experiencia' && 'active'}`}
            type='button'
            onClick={() => handleFormSelection('experiencia')}
          >
            Crear Experiencia
          </button>
          <button
            className={`btn btn-outline-warning ${selectedForm === 'trayecto' && 'active'}`}
            type='button'
            onClick={() => handleFormSelection('trayecto')}
          >
            Crear Trayecto
          </button>
        </div>

        <div className='container'>
          <hr />
        </div>

        {selectedForm === 'experiencia' && <FormCrearExperiencia />}
      </div>
    </Modal>
  );
};

export default ModalCrearExperiencia;
