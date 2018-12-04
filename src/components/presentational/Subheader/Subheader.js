import React from 'react';
import styles from './Subheader.css';
import cn from 'classnames';

const Subheader = (props) => {
  const { subheader } = styles;
  return (
    <div>
      <h2 className={cn(subheader, props.style)}>
        {props.subheading}
      </h2>
    </div>
  );
};

Subheader.defaultProps = {
  subheading: 'A better way to track your job search than Excel spreadsheets.'
};

export default Subheader;