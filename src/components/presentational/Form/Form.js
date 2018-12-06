import React from 'react';
import styles from './Form.css';
import cn from 'classnames';

const Form = (props) => {
  const { inputStyle } = styles;
  return (
    <div className='form-group row justify-content-md-center'>
      <div className='col-sm-4'>
        <input
          type={props.value}
          className={cn('form-control form-control-lg', inputStyle)}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
};

export default Form;