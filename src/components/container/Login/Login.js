import React from 'react';
import styles from './Login.css';
import cn from 'classnames';
import Form from '../../presentational/Form/Form.js'

const vals = ['email', 'password'];

class Login extends React.Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div>
        <form >
          { vals.map(el => <Form value={el} placeholder={el}/>)}
        </form>
      </div>
    );
  }
}

export default Login;