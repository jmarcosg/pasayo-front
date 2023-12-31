import { useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { toast } from 'react-hot-toast';
import Tooltip from '../Tooltip';
import './styles.css';
import { toolModularidad, toolRepetitivas, toolSecuencia, toolAlternativaSimple } from './toolbar';

const BlocksEditor = ({ code, setCode, session, saveSession, type }) => {
  const [xml, setXml] = useState(session.codigo);
  const [javascriptCode, setJavascriptCode] = useState('');

  function workspaceDidChange(workspace) {
    const code = javascriptGenerator.workspaceToCode(workspace);

    setJavascriptCode(code);
  }

  const toolboxCategories = codigo();

  function codigo() {
    let toolbox = 0;

    if (type === 'SECUENCIALIDAD') toolbox = toolSecuencia;
    else if (type === 'ALTERNATIVAS') toolbox = toolAlternativaSimple;
    else if (type === 'REPETITIVAS') toolbox = toolRepetitivas;
    else if (type === 'MODULARIDAD') toolbox = toolModularidad;

    return toolbox;
  }

  useEffect(() => {
    setCode({ ...code, body: xml, compiled: false });
  }, [javascriptCode]);

  const handleRunCode = () => {
    if (!code.body) return;

    try {
      eval(javascriptCode);
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
    <>
      <div className='d-flex gap-2 justify-content-center'>
        <div aria-label='Botonera' className='btn-group mt-2' role='group'>
          <Tooltip position='bottom' tooltipText='Ejecutar código'>
            <button className={`btn ${xml ? 'btn-violet' : 'btn-outline-violet'}`} onClick={handleRunCode}>
              <i className='bi bi-play-fill' />
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
        </div>
      </div>

      <BlocklyWorkspace
        className='fill-height'
        initialXml={xml}
        toolboxConfiguration={toolboxCategories}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        onWorkspaceChange={workspaceDidChange}
        onXmlChange={setXml}
      />
    </>
  );
};

export default BlocksEditor;
