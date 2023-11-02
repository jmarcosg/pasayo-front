import monacoThemes from 'monaco-themes/themes/themelist';

const ThemeDropwdown = () => {
  return (
    <div className='mb-2 px-4'>
      <select aria-label='Selección Tema' className='form-select'>
        {Object.entries(monacoThemes).map(([themeId, themeName]) => (
          <option key={themeId} value={themeId}>
            {themeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeDropwdown;
