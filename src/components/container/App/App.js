import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import Landing from '../../presentational/Landing/Landing.js';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const { isLoggedIn } = this.state;
    let nav = <NavBar/>;
    if (isLoggedIn) {
      nav = <NavBar links={['Link1', 'Link2', 'Link3']}/>
    }
    
    return (
      <div>
        {nav}
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/login' component={Login}/>
          <Route path='/sign-up' component={Signup}/>
        </Switch>
      </div>
    );
  }
}