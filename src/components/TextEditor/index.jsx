import { useState } from 'react';
import Editor from '@monaco-editor/react';
import ThemeDropwdown from './ThemeDropdown';

const TextEditor = ({ onChange, language, code, theme }) => {
  const [value, setValue] = useState(code || '');

  const handleEditorChange = (value) => {
    setValue(value);
    // onChange('code', value);
  };

  return (
    <div className='text-ide'>
      <ThemeDropwdown />
      <Editor
        defaultValue='// comentario'
        height='65vh'
        language={language || 'javascript'}
        theme={'vs-dark'}
        value={value}
        width={`100%`}
        // onChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
