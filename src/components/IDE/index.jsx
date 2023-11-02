import { useState } from 'react';
import Editor from '@monaco-editor/react';

const IDE = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || '');

  const handleEditorChange = (value) => {
    setValue(value);
    onChange('code', value);
  };

  return (
    <div className=''>
      <Editor
        defaultValue='// comentario'
        height='85vh'
        language={language || 'javascript'}
        theme={theme}
        value={value}
        width={`100%`}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default IDE;
