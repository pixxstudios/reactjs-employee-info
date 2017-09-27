import React, { Component } from 'react';
import './App.css';

import AppHeader from './components/AppHeader.component';
import Employees from './components/Employees.component';

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Employees />
      </div>
    );
  }
}

export default App;
