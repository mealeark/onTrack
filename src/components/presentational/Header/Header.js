import React from 'react';
import cn from 'classnames';

const Header = (props) => (
  <div>
    <h1 className={cn('header__style', props.style)} style={props.style}>
      {props.title}
    </h1>
  </div>
);

Header.defaultProps = {
  title: 'onTrack'
};

export default Header;