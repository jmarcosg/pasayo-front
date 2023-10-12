import { Modal as M } from 'react-bootstrap';
import LogoPasayoColor from '../Logo/PasayoColor';

const Modal = ({ size, show, setShow, title, footer, children, loading }) => {
  const hide = () => setShow(false);

  return (
    <M centered aria-labelledby='contained-modal-title-vcenter' show={show} size={size ? size : 'lg'} onHide={hide}>
      <M.Header closeButton>
        <LogoPasayoColor />
        <M.Title id='contained-modal-title-vcenter'>{!loading && title()}</M.Title>
      </M.Header>
      <M.Body>{children}</M.Body>
      {footer && <M.Footer>{!loading && footer()}</M.Footer>}
    </M>
  );
};

export default Modal;
