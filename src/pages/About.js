import React, { Component } from 'react'
import P from '../components/P'

class About extends Component {
  render() {
    return (
      <div className="container">
        <P darkMode={this.props.darkMode}>About</P>
      </div>
    );
  }
}

export default About
