import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props, ref) => (
  <div className='mb-3'>
    <label className='form-label' htmlFor={props.id} id={'label-' + props.id}>
      {props.label}
    </label>
    <input {...props} ref={ref} className='form-control' />
  </div>
));
