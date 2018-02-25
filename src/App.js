import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';

import logo from './logo.svg';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <NavigationDrawer
        drawerTitle="Menu"
        toolbarTitle="React-MD-X">
        <div className="App">
          <img src={ logo } width="256px"/>
          <h1>
            Welcome to React-MD-X
          </h1>
        </div>
      </NavigationDrawer>
    );
  }
}

export default App;
