import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Topics from './Topics'
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Topics'>Topics</Link></li>
        </ul>

        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Topics' component={Topics} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
