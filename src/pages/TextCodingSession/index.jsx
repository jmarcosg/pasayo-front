import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TextEditor } from '../../components';
import { createSession, getExperiencia, joinSession } from './handlers';

const TextCodingSession = () => {
  let { id, user, session: sessionID } = useParams();
  const [session, setSession] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const [room, setRoom] = useState(null);

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
    createSession(session, setSession, id, user);
  }, []);

  useEffect(() => {
    if (session.data) {
      joinSession(session, setSession, session.data._id);
    }

    // if (session.data && sessionID) {
    //   joinSession(session, setSession, session.data._id);
    // }
  }, [session]);

  return (
    <>
      <div className='container'>
        <Link className='btn btn-warning my-2' to={'/'} onClick={() => console.log('disconnect session')}>
          <i className='fas fa-arrow-left' /> Volver al Inicio
        </Link>
      </div>

      {session.loading && !session.data && (
        <div className='spinner-grow text-warning' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>
      )}

      {experiencia.loading && !experiencia.data && (
        <div className='spinner-grow text-warning' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>
      )}

      {!session.loading && !experiencia.loading && experiencia.data && (
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

          <TextEditor isSession code={code} setCode={setCode} />
        </div>
      )}
    </>
  );
};

export default TextCodingSession;
