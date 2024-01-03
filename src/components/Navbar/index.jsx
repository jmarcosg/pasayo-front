import { Link } from 'react-router-dom';
import pasayoLogo from '../../assets/img/pasayo_color.png';
import { useUserAuth } from '../../context';

const Navbar = ({ userData }) => {
  const { logout } = useUserAuth();

  return (
    <header className={`navbar navbar-expand-lg bg-body-tertiary ${!userData && 'shadow'}`}>
      <nav className='container-xxl flex-wrap flex-lg-nowrap align-items-center'>
        <div className='d-flex align-items-center gap-sm-2'>
          <Link
            className='navbar-brand p-0 me-0 me-lg-2 d-flex gap-2 align-items-center text-uppercase fw-semibold'
            to={'/'}
          >
            <img
              alt='Logo'
              className='d-inline-block align-text-top user-select-none'
              src={pasayoLogo}
              style={{ maxHeight: '8%', maxWidth: '8%' }}
            />
            Pasayo
          </Link>
        </div>

        {userData && (
          <div className='d-flex gap-2 align-items-center'>
            <div className='d-none d-sm-block text-start'>
              <small className='fw-bold'>{userData?.username}</small>
            </div>

            <div className='vr d-none d-sm-block' />

            <Link
              className='d-flex gap-2 text-uppercase badge bg-danger text-wrap text-decoration-none'
              role='button'
              to={'/login'}
              onClick={logout}
            >
              <i className='bi bi-box-arrow-left' />
              Salir
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
