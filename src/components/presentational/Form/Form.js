import React from 'react';
import cn from 'classnames';

const Form = (props) => {
  return (
   
        <div className='form-group row justify-content-md-center'>
          <div className='col-sm-4'>
            <input type={props.value} className='form-control form-control-lg' id='lgFormGroupInput' placeholder={props.placeholder}/>
          </div>
        </div>
  
  );
};

export default Form;