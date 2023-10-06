import React, { useState } from 'react';
import { topics, authors } from './handlers';

const TopicFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState({
    topic: 'TODOS',
    author: 'TODAS',
  });

  const handleFilterSelection = (filter, type) => {
    setSelectedFilter((selectedFilter) => ({
      ...selectedFilter,
      [type]: filter.value,
    }));
  };

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
                checked={selectedFilter.topic === topic.value}
                className='btn-check'
                id={topic.value}
                name='btnradio'
                type='radio'
                value={topic.value}
                onChange={() => handleFilterSelection(topic, 'topic')}
              />
              <label className='btn btn-outline-warning' htmlFor={topic.value}>
                {topic.name}
              </label>
            </React.Fragment>
          ))}
        </div>

        <div aria-label='Basic example' className='btn-group' role='group'>
          {authors.map((author, j) => (
            <React.Fragment key={j}>
              <input
                autoComplete='off'
                checked={selectedFilter.author === author.value}
                className='btn-check'
                id={author.value}
                name='options'
                type='radio'
                value={author.value}
                onChange={() => handleFilterSelection(author, 'author')}
              />
              <label className='btn btn-outline-warning' htmlFor={author.value}>
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
