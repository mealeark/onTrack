import React from 'react';
import styles from './Login.css';
import cn from 'classnames';
import Form from '../../presentational/Form/Form.js';
import Header from '../../presentational/Header/Header.js';
import Button from '../../presentational/Button/Button.js';

const vals = ['email', 'password'];

class Login extends React.Component {
  render() {
    const { colCentered, divStyle } = styles;
    return (
      <div>
        <div className='row justify-content-md-center'>
          <div className={cn('col-md-2 col-md-offset-5', colCentered)}>
            <Header title={'Login'}/>
          </div>
        </div>
        <form className={cn(divStyle)}>
          { vals.map((el, i) => <Form value={el} placeholder={el} key={i}/>)}
        </form>
        <div className={cn('row justify-content-md-center', divStyle)}>
          <div className='col-sm-4'>
            <Button buttonPhrase={'Login'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;