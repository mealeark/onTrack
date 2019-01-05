import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import Landing from '../../presentational/Landing/Landing.js';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
    this.onAuthSubmit = this.onAuthSubmit.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  isAuthenticated() {
    try {
      const json = localStorage.getItem('token');
      const token = JSON.parse(json);

      if (token) {
        this.setState({token});
      }
    } catch(e) {
      console.log('No token!');
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.setState({
      token: null
    });

    return (
      <Switch>
        <Redirect from={this.props.location.pathname} exact to='/'/>
      </Switch>
    );
  }

  componentDidMount() {
    this.isAuthenticated();
  }

  onAuthSubmit(token) {
    this.setState({token});
    localStorage.setItem('token', JSON.stringify(token));
    console.log(token);
  }

  render() {
    const { token } = this.state;

    return (
      <div>
        {token ? 
          (
            <NavBar links={['Link1', 'Link2', 'Link3']} token={token} logout={this.onLogout}/>
          ) : (
            <NavBar/>
          )
        }
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route
            path='/login'
            render={(props) => (
              <Login
                onAuthSubmit={this.onAuthSubmit}
              />
            )}
          />
          <Route 
            path='/sign-up'
            render={(props) => (
              <Signup
                onAuthSubmit={this.onAuthSubmit}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}