import React from 'react';
import cn from 'classnames';
import Form from '../../presentational/Form/Form.js';
import Header from '../../presentational/Header/Header.js';
import Button from '../../presentational/Button/Button.js';
import { Link } from 'react-router-dom';

const vals = ['email', 'password'];

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className='row justify-content-md-center'>
          <div className={cn('col-md-2 col-md-offset-5')}>
            <Header title={'Login'} style={{textAlign: 'center'}}/>
          </div>
        </div>
        <form >
          { vals.map((el, i) => <Form value={el} placeholder={el} key={i}/>)}
        </form>
        <div className={cn('row justify-content-md-center')}>
          <div className='col-sm-4'>
            <Button buttonPhrase={'Login'}/>
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-sm-4' style={{textAlign: 'center'}}>
          <br/>
          <hr className='hr__text' data-content='or'></hr>
            <Link to='/sign-up'>
              <Button buttonPhrase={'Signup'} style={'btnStyle__alt'}/>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Login;