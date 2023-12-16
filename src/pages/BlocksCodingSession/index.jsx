import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createSession, getExperiencia, saveCode } from './handlers';
import { BlocksEditor } from '../../components';
import { getSession } from '../../utils/auth';

const BlocksCodingSession = () => {
  let { id } = useParams();
  const { username } = getSession();

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

  const [session, setSession] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const saveSession = async () => {
    saveCode(session, setSession, code);
  };

  useEffect(() => {
    createSession(session, setSession, id, username);
  }, []);

  useEffect(() => {
    if (session.data) {
      getExperiencia(experiencia, setExperiencia, code, setCode, id);
    }
  }, [session]);

  return (
    <>
      <div className='container'>
        <Link className='btn btn-warning my-2' to={'/'}>
          <i className='fas fa-arrow-left' /> Volver al Inicio
        </Link>
      </div>

      <div className='container mt-2'>
        {!experiencia?.loading && !experiencia?.data && (
          <div className='alert alert-danger text-center' role='alert'>
            No se pudo encontrar la experiencia solicitada.
          </div>
        )}

        {!experiencia?.loading && experiencia?.data && (
          <>
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
          </>
        )}
      </div>

      {!experiencia?.loading && experiencia?.data && (
        <div className='container-fluid'>
          <BlocksEditor
            code={code}
            saveSession={saveSession}
            session={session.data}
            setCode={setCode}
            type={experiencia.data?.tema}
          />
        </div>
      )}
    </>
  );
};

export default BlocksCodingSession;
