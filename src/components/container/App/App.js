import React from 'react';
import NavBar from '../NavBar/NavBar.js';
import Landing from '../../presentational/Landing/Landing.js';
import Tutorial from '../../presentational/Tutorial/Tutorial.js';
import GetStarted from '../../presentational/GetStarted/GetStarted';
import Login from '../Login/Login.js';
import Signup from '../Signup/Signup.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Landing />
        <Tutorial />
        <GetStarted />
        <Login />
        <Signup />
      </div>
    );
  }
}