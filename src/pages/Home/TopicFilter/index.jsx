import { useState } from 'react';
import { topics, authors, types, getFilteredExperiencias } from './handlers';
import ModalCrearExperiencia from './ModalCrearExperiencia';

const TopicFilter = ({ experiences, getExperiencias, setExperiences }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    topic: 'TODOS',
    author: 'TODAS',
    type: 'TODOS',
    title: '',
  });
  const [showModalCrearExperiencia, setShowModalCrearExperiencia] = useState(false);

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
      title: '',
    });
    getExperiencias(experiences, setExperiences);
  };

  const toggleModalSolicitar = () => setShowModalCrearExperiencia(!showModalCrearExperiencia);

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary shadow'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse d-flex gap-2 justify-content-center' id='navbarSupportedContent'>
          <form className='d-flex gap-2'>
            <input
              aria-label='Search'
              className='form-control ms-2'
              placeholder='Título'
              type='search'
              value={selectedFilter.title.toUpperCase()}
              onChange={(e) => handleFilterSelection(e.target, 'title')}
            />
          </form>

          <div className='btn-group' role='group'>
            <div className='btn-group' role='group'>
              <button
                aria-expanded='false'
                className='btn btn-sm btn-primary dropdown-toggle'
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
                            <i className='bi bi-check-circle-fill me-2 text-primary' />
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

            <div className='btn-group' role='group'>
              <button
                aria-expanded='false'
                className='btn btn-sm btn-primary dropdown-toggle'
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
                            <i className='bi bi-check-circle-fill me-2 text-primary' />
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

            <div className='btn-group' role='group'>
              <button
                aria-expanded='false'
                className='btn btn-sm btn-primary dropdown-toggle'
                data-bs-toggle='dropdown'
                type='button'
              >
                Tipo: <strong>{selectedFilter.type}</strong>
              </button>
              <ul className='dropdown-menu'>
                {types.map((type, i) => (
                  <li key={i}>
                    <span className='dropdown-item' onClick={() => handleFilterSelection(type, 'type')}>
                      {
                        <>
                          {selectedFilter.type === type.value && (
                            <i className='bi bi-check-circle-fill me-2 text-primary' />
                          )}
                          {selectedFilter.type !== type.value && (
                            <i className='bi bi-circle-fill me-2 text-secondary' />
                          )}
                        </>
                      }
                      {type.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className='btn btn-sm btn-primary'
              onClick={() => getFilteredExperiencias(experiences, setExperiences, selectedFilter)}
            >
              <i className='bi bi-search' />
            </button>
          </div>

          <button
            className='btn btn-sm btn-secondary d-flex align-items-center gap-2 text-uppercase'
            type='button'
            onClick={handleResetFilters}
          >
            <span className='d-none d-lg-block'>LIMPIAR FILTROS</span>
            <i className='bi bi-arrow-clockwise' />
          </button>

          <button
            className='btn btn-sm btn-success align-items-center d-flex gap-2 text-uppercase'
            type='button'
            onClick={toggleModalSolicitar}
          >
            <span>CREAR</span>
            <i className='bi bi-plus-square-fill' />
          </button>

          <ModalCrearExperiencia
            experiences={experiences}
            getExperiencias={getExperiencias}
            setExperiences={setExperiences}
            setShowModal={showModalCrearExperiencia}
            showModal={showModalCrearExperiencia}
            toggleModal={toggleModalSolicitar}
          />
        </div>
      </div>
    </nav>
  );
};

export default TopicFilter;
