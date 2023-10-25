import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { ExperienceCard } from '../../components';
import TopicFilter from './TopicFilter';
import { getExperiencias } from './handlers';

const Home = () => {
  const [experiences, setExperiences] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    getExperiencias(experiences, setExperiences);
  }, []);

  return (
    <>
      <TopicFilter experiences={experiences} getExperiencias={getExperiencias} setExperiences={setExperiences} />

      <div className='container mt-4'>
        {experiences.loading && (
          <div className='d-flex justify-content-center'>
            <div className='spinner-grow text-warning' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        )}

        {!experiences?.loading && experiences?.data?.length > 0 && (
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 576: 1, 768: 2, 992: 3, 1200: 3, 1400: 3 }}>
            <Masonry columnsCount={3} gutter={'2rem'}>
              {experiences.data.map((experience, i) => (
                <ExperienceCard key={i} data={experience} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        )}

        {!experiences?.loading && experiences?.data?.length === 0 && (
          <div className='alert alert-warning' role='alert'>
            No hay experiencias para mostrar en este momento.
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
