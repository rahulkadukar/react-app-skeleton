import React, { Component , useState } from 'react'
import styled from 'styled-components'

const P = styled.p`
  color: ${props => props.darkMode ? '#ECEFF1' : 'black'};
  transition: color 0.5s ease-in-out;
  padding: 10px;
`

export default P;