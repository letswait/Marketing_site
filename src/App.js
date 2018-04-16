import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Wheel from './components/Wheel';
import Footer from './components/Footer'
import Partners from './components/Partners'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Wheel />
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default App;
