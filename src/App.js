import React, { Component } from 'react';
import './assets/scss/components/popup/auth/login.css';
import './assets/scss/components/popup/auth/signup.css';
import Auth from './components/popup/auth/Auth';


class App extends Component {
   render() {
    return (
      <Auth />
    );
  }
}

export default App;