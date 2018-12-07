import React from 'react';
import cn from 'classnames';

const Form = (props) => (
  <div className='form-group row justify-content-md-center'>
    <div className='col-sm-4'>
      <input
        type={props.value}
        className={cn('form-control form-control-lg', 'input__style')}
        placeholder={props.placeholder}
      />
    </div>
  </div>
);

export default Form;