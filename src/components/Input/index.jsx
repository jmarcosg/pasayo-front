import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => (
  <div className='mb-3'>
    <label className='form-label fw-bold' htmlFor={props.id} id={'label-' + props.id}>
      {props.label}
    </label>
    <input {...props} ref={ref} className='form-control' />
  </div>
));

Input.displayName = 'Input';
export default Input;
