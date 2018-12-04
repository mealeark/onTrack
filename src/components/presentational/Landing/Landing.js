import React from 'react';
import Header from '../Header/Header.js';
import Subheader from '../Subheader/Subheader.js';
import ProductVideo from '../ProductVideo/ProductVideo.js';
import styles from './Landing.css';
import cn from 'classnames';

const Landing = (props) => {
  const { landing } = styles;
  return (
    <div className={cn('row justify-content-center', landing)}>
      <div className='row'>
        <div className='col-sm'>
          <Header />
          <Subheader />
        </div>
        <div className='col-sm'>
          <ProductVideo />
        </div>
      </div>
    </div>
  );
};

export default Landing;