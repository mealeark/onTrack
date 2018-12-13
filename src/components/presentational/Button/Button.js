import React from 'react';
import cn from 'classnames';

const Button = (props) => (
  <button 
    type='button'
    className={cn('btn btn-primary btn-lg', 'btnStyle', props.style)}
    onClick={() => props.onClick()}
  >
    {props.buttonPhrase}
  </button>
);

Button.defaultProps = {
  buttonPhrase: 'Submit'
};

export default Button;