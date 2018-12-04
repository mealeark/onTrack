import React from 'react';
import Header from '../Header/Header.js';
import styles from './Step.css';
import cn from 'classnames';


const Step = (props) => {
  const { color } = props;
  const { stepFont } = styles;
  const divStyle = {
    stepColor: {
      color: color,
      textAlign: 'center'
    }
  };
  
  const { stepColor } = divStyle;
  return (
      <div class="col-sm">
        <Header title={props.number + 1} style={{ ...stepColor }}/>
        <div className={cn(stepFont)}>
          {props.step}
        </div>
      </div>
  );
};

export default Step;