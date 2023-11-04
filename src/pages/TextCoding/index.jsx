import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TextEditor } from '../../components';
import { getExperiencia } from './handlers';

const TextCoding = () => {
  let { id } = useParams();
  const [experiencia, setExperiencia] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const [code, setCode] = useState({
    body: '',
    compiled: false,
    error: null,
    sending: false,
  });

  useEffect(() => {
    getExperiencia(experiencia, setExperiencia, code, setCode, id);
  }, []);

  return (
    <>
      <div className='px-4'>
        <Link className='btn btn-warning my-2' to={'/'}>
          <i className='fas fa-arrow-left' /> Volver al Inicio
        </Link>
      </div>

      <div className='container mt-2'>
        <div className='card mb-2'>
          <div className='card-header'>
            <span className='fw-bold'>{experiencia?.data?.titulo?.toUpperCase()}</span>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item fst-italic d-flex gap-2'>
              <i className='bi bi-chat-fill' /> <span>{experiencia?.data?.narrativa}</span>
            </li>
            <li className='list-group-item fw-bold d-flex gap-2'>
              <i className='bi bi-bullseye' />
              <span>{experiencia?.data?.objetivo}</span>
            </li>
            <li className='list-group-item'>
              <span className='badge text-bg-secondary'>{experiencia?.data?.tema}</span>
            </li>
          </ul>
        </div>

        <TextEditor code={code} setCode={setCode} />
      </div>
    </>
  );
};

export default TextCoding;
