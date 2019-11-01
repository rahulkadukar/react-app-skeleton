import React, { Component } from 'react'
import P from '../components/P'

class Home extends Component {
  render() {
    return (
      <div className="container">
        <P darkMode={this.props.darkMode}>Home</P>
      </div>
    );
  }
}

export default Home
