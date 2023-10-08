import { useEffect, useState } from 'react';
import { topics, authors, getData } from './handlers';

const TopicFilter = () => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
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

  const handleResetFilters = () => {
    setSelectedFilter({
      topic: 'TODOS',
      author: 'TODAS',
    });
  };

  useEffect(() => {
    getData(state, setState);
  }, []);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        {/* <button
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          className='navbar-toggler'
          data-bs-target='#navbarSupportedContent'
          data-bs-toggle='collapse'
          type='button'
        >
          <span className='navbar-toggler-icon' />
        </button> */}

        <div className='collapse navbar-collapse d-flex gap-2 justify-content-center' id='navbarSupportedContent'>
          <form className='d-flex gap-2'>
            <input aria-label='Search' className='form-control ms-2' placeholder='Título' type='search' />

            <button className='btn btn-warning'>
              <i className='bi bi-search' />
            </button>
          </form>

          <div className='btn-group'>
            <button
              aria-expanded='false'
              className='btn btn-warning dropdown-toggle'
              data-bs-toggle='dropdown'
              type='button'
            >
              Tema: <strong>{selectedFilter.topic}</strong>
            </button>
            <ul className='dropdown-menu'>
              {topics.map((topic, i) => (
                <li key={i}>
                  <span className='dropdown-item' onClick={() => handleFilterSelection(topic, 'topic')}>
                    {
                      <>
                        {selectedFilter.topic === topic.value && (
                          <i className='bi bi-check-circle-fill me-2 text-warning' />
                        )}
                        {selectedFilter.topic !== topic.value && (
                          <i className='bi bi-circle-fill me-2 text-secondary' />
                        )}
                      </>
                    }
                    {topic.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='btn-group'>
            <button
              aria-expanded='false'
              className='btn btn-warning dropdown-toggle'
              data-bs-toggle='dropdown'
              type='button'
            >
              Autor: <strong>{selectedFilter.author}</strong>
            </button>
            <ul className='dropdown-menu'>
              {authors.map((author, i) => (
                <li key={i}>
                  <span className='dropdown-item' onClick={() => handleFilterSelection(author, 'author')}>
                    {
                      <>
                        {selectedFilter.author === author.value && (
                          <i className='bi bi-check-circle-fill me-2 text-warning' />
                        )}
                        {selectedFilter.author !== author.value && (
                          <i className='bi bi-circle-fill me-2 text-secondary' />
                        )}
                      </>
                    }
                    {author.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className='btn btn-warning d-flex align-items-center gap-2 text-uppercase'
            type='button'
            onClick={handleResetFilters}
          >
            <span className='d-none d-lg-block'>REINICIAR FILTROS</span>
            <i className='bi bi-arrow-clockwise' />
          </button>

          <button className='btn btn-warning align-items-center d-flex gap-2 text-uppercase' type='button'>
            <span>CREAR</span>
            <i className='bi bi-plus-square-fill' />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopicFilter;
