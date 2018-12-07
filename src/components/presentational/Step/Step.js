import React from 'react';
import Header from '../Header/Header.js';
import cn from 'classnames';


const Step = (props) => {
  const { color } = props;
  const divStyle = {
    stepColor: {
      color: color,
      textAlign: 'center'
    }
  };
  
  const { stepColor } = divStyle;
  return (
    <div className='col-sm'>
      <Header title={props.number + 1} style={{ ...stepColor }}/>
      <div className={cn('step__style')}>
        {props.step}
      </div>
    </div>
  );
};

export default Step;