import React, { Component } from 'react';
import Routes from './routes'
import Header from './component/Header/Header'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='header'>
          <Header />
        </div>
        <div className='main'>
          <div className='dash'>
            {Routes}
          </div>
        
        
        </div>
      </div>
    );
  }
}

export default App;
