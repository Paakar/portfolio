import React, { Component } from 'react';
//import logo from './logo.svg';
import './styles/css/style.min.css';
import SideBar from "./components/SideBar";
import MainContainer from './components/MainContainer';

class App extends Component {
  render() {
    return (
      <div id="paakar-page">
        <div className="container-wrap">
          <SideBar/>
          <MainContainer/>
        </div>
      </div>
    );
  }
}

export default App;
