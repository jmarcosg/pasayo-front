import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';

const Tooltip = ({ children, position, tooltipText }) => {
  const renderTooltip = (props) => (
    <BootstrapTooltip id='button-tooltip' {...props}>
      <span className='fw-bold'>{tooltipText}</span>
    </BootstrapTooltip>
  );

  return (
    <OverlayTrigger delay={{ show: 250, hide: 400 }} overlay={renderTooltip} placement={position || 'top'}>
      {children}
    </OverlayTrigger>
  );
};

export default Tooltip;
