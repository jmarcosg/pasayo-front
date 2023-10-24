import { Link } from 'react-router-dom';
import pasayoLogo from '../../assets/img/PASAYOTEXTO_white.png';
import { useUserAuth } from '../../context';

const Navbar = ({ userData }) => {
  const { logout } = useUserAuth();

  return (
    <nav className='navbar navbar-expand-lg bg-warning'>
      <div className='container-fluid d-flex justify-content-between'>
        <div className='navbar-brand'>
          <img
            alt='Logo'
            className='d-inline-block align-text-top user-select-none'
            src={pasayoLogo}
            style={{ maxHeight: '15%', maxWidth: '15%' }}
          />
        </div>
        {userData && (
          <>
            <button
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              className='navbar-toggler'
              data-bs-target='#navbarSupportedContent'
              data-bs-toggle='collapse'
              type='button'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link className='btn btn-danger text-nowrap' role='button' to={'/login'} onClick={logout}>
                    <i className='bi bi-person-circle me-2' />
                    {userData?.username}
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
