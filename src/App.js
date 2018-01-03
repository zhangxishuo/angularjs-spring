import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 声明一个App组件
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default App;
