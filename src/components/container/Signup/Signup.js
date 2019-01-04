import React from 'react';
import cn from 'classnames';
import Form from '../../presentational/Form/Form.js';
import Header from '../../presentational/Header/Header.js';
import Button from '../../presentational/Button/Button.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

const vals = ['username', 'first name', 'last name', 'password'];

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'username': null,
      'password': null,
      'first name': null,
      'last name': null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  handleChange(e, key) {
    this.setState({
      [key]:  e.target.value
    });
  }

  handleSignup() {
    const { username, password } = this.state;
    axios.post('http://localhost:3000/api/signup', 
      {username: username, password: password})
      .then(data => { 
        this.props.onAuthSubmit(data.data.success, data.data.username);
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
            <Header title={'Signup'} style={{textAlign: 'center'}}/>
          </div>
        </div>
        <form id='form-input'>
          { vals.map((el, i) => { 
            return (
              <Form
                value={el}
                placeholder={el}
                key={i} 
                onChange={this.handleChange} 
              />
            );
          })}
        </form>
        <div className='row justify-content-md-center'>
          <div className='col-sm-4'>
            <Button buttonPhrase={'Signup'} onClick={this.handleSignup}/>
          </div>
        </div>
        <div className='row justify-content-md-center'>
          <div className='col-sm-4' style={{textAlign: 'center'}}>
          <br/>
          <hr className='hr__text' data-content='or'></hr>
            <Link to='/login'>
              <Button buttonPhrase={'Login'} style={'btnStyle__alt'}/>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;