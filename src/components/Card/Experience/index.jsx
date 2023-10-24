const ExperiencieCard = ({ data }) => {
  return (
    <div className='card' style={{ minWidth: '18rem', maxWidth: '100%' }}>
      <div className='card-body text-bg-light rounded-top'>
        <h5 className='card-title fw-bold'>{data?.titulo}</h5>
        <p className='card-text text-wrap fst-italic'>&quot;{data?.narrativa}&quot;</p>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <span className='fw-bold'>Objetivo Didáctico:</span> {data?.objetivo}
        </li>
        <li className='list-group-item'>
          <span className='fw-bold'>Tema:</span> {data?.tema}
        </li>
      </ul>
      <div className='d-grid gap-3'>
        <div aria-label='Acciones Experiencia' className='btn-group' role='group'>
          <button className='btn btn-warning rounded-0' type='button'>
            <i className='bi bi-puzzle' />
          </button>
          <button className='btn btn-warning rounded-0' type='button'>
            <i className='bi bi-code-square' />
          </button>
          <button className='btn btn-warning rounded-0' type='button'>
            <i className='bi bi-eye' />
          </button>
        </div>
      </div>
      <div className='card-body text-bg-light d-flex flex-row-reverse gap-2'>
        <span className='badge text-bg-danger d-flex gap-1'>
          <i className='bi bi-person-fill' />
          {data?.user}
        </span>
        <span className='badge text-bg-secondary d-flex gap-1'>
          <i className='bi bi-signpost-fill' />
          {data?.trayecto[0]?.tema}
        </span>
      </div>
    </div>
  );
};

export default ExperiencieCard;
