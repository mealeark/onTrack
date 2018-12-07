import React from 'react';
import cn from 'classnames';
import Button from '../Button/Button.js';
import { Link } from 'react-router-dom';

const GetStarted = (props) => (
  <div className={cn('get__started__container')}>
    <div className='row justify-content-md-center'>
      <Link to='/sign-up' className='col-md-2 col-xs-2 col1 center-block'>
        <Button
          buttonPhrase={'Signup'}
          style={'signupBtn'}
        />
      </Link>
      <Link to='/login' className='col-md-2 col-xs-2 col1 center-block'>
        <Button
          buttonPhrase={'Login'}
          style={'loginBtn'} 
        />
      </Link>
    </div>
  </div>
);

export default GetStarted;