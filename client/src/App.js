import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <AppNavbar />
          <ShoppingList />
        </header>
      </div>
    );
  }
}

export default App;

