import React from 'react';
import cn from 'classnames';
import Form from '../../presentational/Form/Form.js';
import Header from '../../presentational/Header/Header.js';
import Button from '../../presentational/Button/Button.js';
import { Link } from 'react-router-dom';

const vals = ['username', 'password'];

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'username': null,
      'password': null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleChange(e, key) {
    this.setState({
      [key]:  e.target.value
    });
  }

  handleLogin() {
    const { username, password } = this.state;
    axios.post('http://localhost:3000/api/login', 
      {username: username, password: password})
      .then(res => {
        const { token } = res.data; 
        this.props.onAuthSubmit(token);
        this.clearInputs(); 
      })
      .catch(err => console.error(err));
  }

  clearInputs() {
    document.getElementById('form-input').reset();
  }
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