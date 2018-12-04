import React from 'react';
import styles from './Header.css';
import cn from 'classnames';

const Header = (props) => {
  return (
    <div>
      <h1 className={cn(styles.header, props.style)} style={props.style}>
        {props.title}
      </h1>
    </div>
  );
};

Header.defaultProps = {
  title: 'onTrack'
};

export default Header;