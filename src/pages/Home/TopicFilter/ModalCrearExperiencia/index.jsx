import { useState } from 'react';
import { Modal } from '../../../../components';
import FormCrearExperiencia from './FormCrearExperiencia';
import FormCrearTrayecto from './FormCrearTrayecto';

const ModalCrearExperiencia = ({ experiences, getExperiencias, setExperiences, showModal, toggleModal }) => {
  const [selectedForm, setSelectedForm] = useState(''); // experiencia | trayecto
  let [modalTitle, setModalTitle] = useState('');

  const handleFormSelection = (exp) => {
    // add active class to selected form
    setSelectedForm(exp);
  };

  return (
    <Modal
      setShow={toggleModal}
      show={showModal}
      size={'lg'}
      title={() => (modalTitle ? modalTitle : 'Seleccione una opción a crear')}
    >
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

        {selectedForm === 'experiencia' && (
          <FormCrearExperiencia
            experiences={experiences}
            getExperiencias={getExperiencias}
            setExperiences={setExperiences}
            setModalTitle={setModalTitle}
            toggleModal={toggleModal}
          />
        )}

        {selectedForm === 'trayecto' && <FormCrearTrayecto setModalTitle={setModalTitle} toggleModal={toggleModal} />}
      </div>
    </Modal>
  );
};

export default ModalCrearExperiencia;
