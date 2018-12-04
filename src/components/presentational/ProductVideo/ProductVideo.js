import React from 'react';
import ReactPlayer from 'react-player';
import styles from './ProductVideo.css';
import CssModules from 'react-css-modules';

const ProductVideo = (props) => {
  return (
    <div styleName='player-wrapper'>
      <ReactPlayer
        styleName='react-player'
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
        height='100%'
      />
    </div>
  );
};

export default CssModules(ProductVideo, styles);