import React, {Component} from 'react';
//import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './container/main';

class App extends Component{


  render(){
    return (
      <div className="App">
        <Main/>
      </div>
    );
  }
}


export default App