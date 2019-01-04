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
      isLoggedIn: false,
      username: null
    };
    this.onAuthSubmit = this.onAuthSubmit.bind(this);
  }

  onAuthSubmit(logged, username) {
    this.setState({
      isLoggedIn: logged,
      username
    });
    console.log(username);
  }

  componentDidUpdate() {
    console.log('updated!');
  }

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div>
        {isLoggedIn ? 
          (
            <NavBar links={['Link1', 'Link2', 'Link3']} username={username}/>
          ) : (
            <NavBar/>
          )
        }
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/login' component={Login}/>
          <Route 
            path='/sign-up'
            render={(props) => (
              <Signup
                onSignup={this.handleSignup}
                onAuthSubmit={this.onAuthSubmit}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}