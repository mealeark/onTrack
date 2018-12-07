import React from 'react';
import Header from '../Header/Header.js';
import Subheader from '../Subheader/Subheader.js';
import ProductVideo from '../ProductVideo/ProductVideo.js';
import Tutorial from '../Tutorial/Tutorial.js';
import GetStarted from '../GetStarted/GetStarted.js';

import cn from 'classnames';

const Landing = (props) => (
  <div>
    <div className={cn('row justify-content-center', 'container__style')}>
      <div className='row'>
        <div className='col-sm-4'>
          <Header />
          <Subheader style='subheader__landing__style'/>
        </div>
        <div className='col-sm-8'>
          <ProductVideo />
        </div>
      </div>
    </div>
    <Tutorial />
    <GetStarted />
  </div>
);

export default Landing;