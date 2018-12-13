import React from 'react';
import cn from 'classnames';

const Subheader = (props) => (
  <div>
    <h2 className={cn('subheader__style', props.style)}>
      {props.subheading}
    </h2>
  </div>
);

Subheader.defaultProps = {
  subheading: 'A better way to track your job search than Excel spreadsheets.'
};

export default Subheader;