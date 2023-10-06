import React from 'react';

const TopicFilter = () => {
  const topics = [
    { name: 'TODOS', value: 'TODOS', checked: true },
    { name: 'SECUENCIAS', value: 'SECUENCIAS', checked: false },
    { name: 'MODULARIDAD', value: 'MODULARIDAD', checked: false },
    { name: 'ALTERNATIVAS', value: 'ALTERNATIVAS', checked: false },
    { name: 'REPETITIVAS', value: 'REPETITIVAS', checked: false },
  ];

  const authors = [
    { name: 'TODAS', value: 'TODAS', checked: true },
    { name: 'MIAS', value: 'MIAS', checked: false },
  ];

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <form className='d-flex gap-2'>
          <input aria-label='Search' className='form-control ms-2' placeholder='Título' type='search' />

          <button className='btn btn-warning'>
            <i className='bi bi-search' />
          </button>
        </form>

        <div aria-label='Basic example' className='btn-group' role='group'>
          {topics.map((topic, i) => (
            <React.Fragment key={i}>
              <input
                autoComplete='off'
                checked={topic.checked}
                className='btn-check'
                id={topic.id}
                name='options'
                type='radio'
              />
              <label className='btn btn-outline-warning' htmlFor={topic.id}>
                {topic.name}
              </label>
            </React.Fragment>
          ))}
        </div>

        <div aria-label='Basic example' className='btn-group' role='group'>
          {authors.map((author, i) => (
            <React.Fragment key={i}>
              <input
                autoComplete='off'
                checked={author.checked}
                className='btn-check'
                id={author.id}
                name='options'
                type='radio'
              />
              <label className='btn btn-outline-warning' htmlFor={author.id}>
                {author.name}
              </label>
            </React.Fragment>
          ))}
        </div>

        <button className='btn btn-warning d-flex gap-2 text-uppercase' type='button'>
          CREAR
          <i className='bi bi-plus-square-fill' />
        </button>
      </div>
    </nav>
  );
};

export default TopicFilter;
