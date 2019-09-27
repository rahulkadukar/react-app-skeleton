import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import styles from './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this._toggle = this._toggle.bind(this)
  }

  _toggle() {
    const wrapper = document.getElementById('wrapper')
    wrapper.classList.toggle('is-nav-open')

    const body = document.querySelector('body')
    body.classList.toggle('is-nav-open')
  }

  render() {
    return (
    <div className="App">
      <div className="hamburger-icon" id="hamburger-icon" onClick={() => this._toggle()}>Filter</div>
      <div className="wrapper" id="wrapper">
        <p>Filter Header</p>
        <p>Filter Header</p>
        <p>Filter Header</p>
      </div>
    </div>
    );
  }
}

export default Home;
