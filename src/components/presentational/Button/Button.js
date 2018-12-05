import React from 'react';
import cn from 'classnames';
import styles from './Button.css';

const Button = (props) => {
  const { btnStyle } = styles;
  return (
    <button 
      type='button'
      className={cn('btn btn-primary btn-lg', btnStyle, props.style)}
    >
      {props.buttonPhrase}
    </button>
  );
};

Button.defaultProps = {
  buttonPhrase: 'Submit'
};

export default Button;