import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextEditor } from '../../components';
import OutputWindow from './Output';

const TextCodingSession = () => {
  const [code, setCode] = useState({
    body: null,
    sent: false,
    error: null,
  });

  return (
    <>
      <div className='px-4'>
        <Link className='btn btn-warning my-2' to={'/'}>
          <i className='fas fa-arrow-left' /> Volver al Inicio
        </Link>
      </div>

      <div className='mt-2 card'>
        <div className='card-body container-fluid'>
          <div className='row'>
            <div className='col-8'>
              <TextEditor />
            </div>
            <div className='col-4'>
              <OutputWindow />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextCodingSession;
