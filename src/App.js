import React, { Component } from 'react';
import FilmBox from './containers/FilmBox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="completeView">
        <FilmBox />
      </div>
    );
  }
}

export default App;
