import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { toast } from 'react-hot-toast';
import { TextEditor } from '../../components';
import { createSession, getExperiencia, joinSession, saveCode, copyToClipboard } from './handlers';
import { URL_BACK, URL_FRONT } from '../../utils/config';
import { getSession } from '../../utils/auth';

let socket;

const TextCodingSession = () => {
  let { id, user: paramUser, room } = useParams();
  const { username: user } = getSession();
  let sharedSessionLink = '';

  const [session, setSession] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const [users, setUsers] = useState([]);
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

  const disconnectFromSession = () => {
    socket.on('disconnect', (user) => {
      const filteredUsers = users.filter((item) => item !== user);

      setUsers((current) => [...current, filteredUsers]);
    });
  };

  const saveSession = async () => {
    saveCode(session, setSession, code);
  };

  const shareSessionLink = () => {
    copyToClipboard(sharedSessionLink);
  };

  useEffect(() => {
    socket = io(URL_BACK);

    if (paramUser === user) {
      createSession(session, setSession, id, paramUser);
    }
  }, []);

  useEffect(() => {
    socket.emit('user_join_room', { room, user }, (error) => {
      if (error) {
        toast.error(error);
      }
    });
  }, [URL_BACK, room]);

  useEffect(() => {
    socket.on('user_joined_room', (payload) => {
      setUsers((current) => [...current, payload]);
    });
  }, []);

  useEffect(() => {
    socket.on('user_coding', (payload) => {
      setCode({ ...code, body: payload.newCode, compiled: false });
    });
  }, []);

  useEffect(() => {
    if (session.data) {
      getExperiencia(experiencia, setExperiencia, id);
      setCode({ ...code, body: session.data.codigo });
    }
  }, [session.data]);

  useEffect(() => {
    if (experiencia.data) {
      sharedSessionLink = `${URL_FRONT}/texto/${experiencia?.data?._id}/usuario/${user}`;
    }
  }, [experiencia.data]);

  return (
    <>
      <div className='container'>
        <Link className='btn btn-violet my-2' to={'/'} onClick={() => disconnectFromSession}>
          <i className='bi bi-arrow-left' /> Volver al Inicio
        </Link>
      </div>

      {session.loading && !session.data && (
        <div className='spinner-grow text-priamry' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>
      )}

      {experiencia.loading && !experiencia.data && (
        <div className='spinner-grow text-priamry' role='status'>
          <span className='visually-hidden'>Cargando...</span>
        </div>
      )}

      {!experiencia.loading && experiencia.data && (
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

          <TextEditor
            isSession
            code={code}
            saveSession={saveSession}
            setCode={setCode}
            shareSessionLink={shareSessionLink}
          />

          <div className='d-flex gap-2 flex-wrap justify-content-start mt-4'>
            {users &&
              users.map((user, i) => (
                <span key={i} className='badge bg-dark fs-6 d-flex gap-2'>
                  {user === paramUser && <i className='bi bi-person-fill' />}
                  {!user === paramUser && <i className='bi bi-person' />}
                  <span>{user}</span>
                </span>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TextCodingSession;
