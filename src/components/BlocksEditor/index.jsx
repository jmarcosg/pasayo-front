import { useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import './styles.css';
import { toolModularidad, toolRepetitivas, toolSecuencia, toolAlternativaSimple } from './toolbar';

const BlocksEditor = ({ code, setCode, saveSession, isSession, type }) => {
  const [xml, setXml] = useState(code.body);
  const [javascriptCode, setJavascriptCode] = useState('');
  let toolbox;

  const workspaceDidChange = (workspace) => {
    const code = Blockly.JavaScript.workspaceToCode(workspace);

    setJavascriptCode(code);
  };

  useEffect(() => {
    if (type === 'secuencias') toolbox = toolSecuencia;
    else if (type === 'alternativa') toolbox = toolAlternativaSimple;
    else if (type === 'repetitiva') toolbox = toolRepetitivas;
    else if (type === 'MODULARIDAD') toolbox = toolModularidad;
  }, []);

  return (
    <>
      <BlocklyWorkspace
        className='fill-height'
        initialXml={xml}
        toolboxConfiguration={toolbox}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true,
          },
        }}
        onWorkspaceChange={() => workspaceDidChange}
        onXmlChange={setXml}
      />
    </>
  );
};

export default BlocksEditor;
