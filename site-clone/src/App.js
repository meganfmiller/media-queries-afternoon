import React, { Component } from 'react';
import './App.css';
import hamburger from './hamburger.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    }

    this.slide = this.slide.bind(this);
  }

  slide() {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    return (
      <div className="App">
        <nav className='nav-container'>
          <div className='title'>Start Bootstrap</div>
          <div className='btn' onClick={this.slide}>MENU <img src={hamburger} alt='hamburger menu'/></div>
          <div className='links-container'>
            <div>SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
        </nav>
        <div className={this.state.menuOpen ? 'slide open' : 'slide'}>
          <div className={this.state.menuOpen ? 'open' : 'hide'}>
            <div>SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
        </div>
        <div className='header'>
          <div className='welcome'>Welcome To Our Studio!</div>
          <div className='heading'>IT'S NICE TO MEET YOU</div>
          <div className='btn_more'>TELL ME MORE</div>
        </div>
        <div className='middle-container'>

        </div>
      </div>
    );
  }
}

export default App;
