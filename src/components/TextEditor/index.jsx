import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Editor from '@monaco-editor/react';
import Tooltip from '../Tooltip';
import { options } from './handlers';

const TextEditor = ({ code, setCode, saveSession, isSession, shareSessionLink }) => {
  const [value, setValue] = useState(code.body);

  const handleEditorChange = (value) => {
    setValue(value);
    setCode({ ...code, body: value, compiled: false });
  };

  const handleRunCode = () => {
    if (!code.body) return;

    try {
      eval(code.body);
      toast.success('Código ejecutado correctamente');
      setCode({ ...code, compiled: true });
    } catch (exception) {
      let errorMessages = [];

      if (exception instanceof ReferenceError) {
        errorMessages.push('No se puede ejecutar código con variables indefinidas');
      }

      if (exception instanceof SyntaxError) {
        errorMessages.push('No se puede ejecutar código con errores de sintaxis');
      }

      errorMessages.forEach((errroMessage) => toast.error(errroMessage));
    }
  };

  return (
    <div className='row justify-content-center'>
      <Editor
        defaultValue={!isSession ? code.body : ''}
        height='42vh'
        language={'typescript'}
        loading={'Cargando...'}
        options={options}
        theme={'vs-dark'}
        value={code.body}
        width={`100%`}
        onChange={handleEditorChange}
      />

      <div aria-label='Botonera' className='btn-group mt-2' role='group'>
        <Tooltip position='bottom' tooltipText='Ejecutar código'>
          <button className={`btn ${code.body ? 'btn-violet' : 'btn-outline-violet'}`} onClick={handleRunCode}>
            <i className='bi bi-play-fill' />
          </button>
        </Tooltip>

        {isSession && (
          <>
            <Tooltip position='bottom' tooltipText='Compartir sesión'>
              <button className='btn btn-violet' type='button' onClick={shareSessionLink}>
                <i className='bi bi-share-fill' />
              </button>
            </Tooltip>
            <Tooltip position='bottom' tooltipText='Guardar como solución'>
              <button
                className={`btn ${code.compiled ? 'btn-violet' : 'btn-outline-violet'}`}
                disabled={!code.compiled}
                type='button'
                onClick={saveSession}
              >
                <i className='bi bi-floppy2-fill' />
              </button>
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export default TextEditor;
