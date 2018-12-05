import React from 'react';
import cn from 'classnames';
import styles from './GetStarted.css';
import Button from '../Button/Button.js';

const GetStarted = (props) => {
  const { divStyle, signupBtn, loginBtn } = styles;
  return (
    <div className={cn(divStyle)}>
      <div className='row justify-content-md-center'>
        <div className='col-md-2 col-xs-2 col1 center-block'>
          <Button buttonPhrase={'Signup'} style={signupBtn}/>
        </div>
        <div className='col-md-2 col-xs-2 col1 center-block'>
          <Button buttonPhrase={'Login'} style={loginBtn}/>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;