import React from 'react';
import ReactPlayer from 'react-player';

const ProductVideo = (props) => (
  <div className='product__video'>
    <ReactPlayer
      styleName='react-player'
      url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
      width='100%'
      height='100%'
    />
  </div>
);

export default ProductVideo;