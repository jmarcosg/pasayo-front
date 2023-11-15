import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Editor from '@monaco-editor/react';
import Tooltip from '../Tooltip';
import { options } from './handlers';

const TextEditor = ({ code, setCode, isSession }) => {
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
      if (exception instanceof ReferenceError) {
        toast.error('No se puede ejecutar código con variables indefinidas');
      } else if (exception instanceof SyntaxError) {
        toast.error('No se puede ejecutar código con errores de sintaxis');
      }
    }
  };

  return (
    <div className='row justify-content-center'>
      <Editor
        defaultValue={!isSession ? code.body : ''}
        height='42vh'
        language={'javascript'}
        loading={'Cargando...'}
        options={options}
        theme={'vs-dark'}
        value={code.body}
        width={`100%`}
        onChange={handleEditorChange}
      />
      {code.body && (
        <div aria-label='Botonera' className='btn-group mt-2' role='group'>
          <Tooltip position='bottom' tooltipText='Ejecutar código'>
            <button className='btn btn-warning' onClick={handleRunCode}>
              <i className='bi bi-play-fill' />
            </button>
          </Tooltip>

          {isSession && (
            <>
              <Tooltip position='bottom' tooltipText='Compartir sesión'>
                <button className='btn btn-warning' type='button'>
                  <i className='bi bi-share-fill' />
                </button>
              </Tooltip>
              <Tooltip position='bottom' tooltipText='Guardar como solución'>
                <button
                  className={`btn ${code.compiled ? 'btn-warning' : 'btn-outline-warning'}`}
                  disabled={!code.compiled}
                  type='button'
                >
                  <i className='bi bi-floppy2-fill' />
                </button>
              </Tooltip>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TextEditor;
