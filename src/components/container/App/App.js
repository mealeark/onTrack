import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import Landing from '../../presentational/Landing/Landing.js';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';
import { Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.onAuthSubmit = this.onAuthSubmit.bind(this);
  }

  onAuthSubmit(logged) {
    this.setState({isLoggedIn: logged});
    console.log(this.state);
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