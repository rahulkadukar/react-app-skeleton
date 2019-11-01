import React, { Component } from 'react'
import P from '../components/P'

class Index extends Component {
  render() {
    return (
      <div className="container">
        <P darkMode={this.props.darkMode}>Index</P>
      </div>
    );
  }
}

export default Index
