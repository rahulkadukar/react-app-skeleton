import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Nested from '../components/Nested';
import styled from 'styled-components'

const NewNested = styled(Nested)`
  div.inner-div {
    background: blue;
  }
`;

console.log(NewNested)

class All extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Nested />
        <NewNested />
      </div>
    );
  }
}

export default All;