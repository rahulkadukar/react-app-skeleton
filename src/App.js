import React, { Component} from "react"
import {
  Link as ReactRouterLink,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import styled  from 'styled-components'
import "./App.css"

import About from './pages/About'
import Home from './pages/Home'
import Index from './pages/Index'

import Toggle from './components/Toggle'

const Main = styled.div`
  background-color: ${props => props.darkMode ? '#303030' : '#FFFFFF'};
  transition: background-color 1s ease-in-out;
  min-height: 100%;
  min-width: 100%;
`

const NavBar = styled.nav`
  background-color: ${props => props.darkMode ? '#040404' : '#EE4E02'};
  transition: background-color 1s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Item = styled.li`
  display: block;
  font-size: 20px;
  padding: 20px;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
`

const Footer = styled.div`
  color: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`

const Link =styled(ReactRouterLink)`
  color: white;
  text-decoration: none;
`

const ItemRight =styled(Item)`
  text-align: right;
  padding: 12px;
`

const Text = styled.p`
  padding: 10px;
  font-size: 20px;
  display: block;
  color: black;
`

class App extends Component {
  constructor(props) {
    super(props)
    this._darkMode = this._darkMode.bind(this)

    this.state = {
      darkMode: false
    }
  }

  _darkMode(x) {
    this.setState({
      darkMode: x
    })
  }

  render() {
    return (
      <Router>
        <Main darkMode={this.state.darkMode}>
          <NavBar darkMode={this.state.darkMode}>
            <List>
              <Item><Link to="/">Home</Link></Item>
              <Item><Link to="/about">About</Link></Item>
            </List>
            <ItemRight><Toggle callBack={(x) => {this._darkMode(x)}} /></ItemRight>
          </NavBar>
          <Switch>
            <Route exact path="/"><Index darkMode={this.state.darkMode} /></Route>
            <Route exact path="/about"><About darkMode={this.state.darkMode} /></Route>
            <Route path="*"><Home darkMode={this.state.darkMode} /></Route>
            <App/>
          </Switch>
          <Footer>
            <Text>&copy;</Text>
          </Footer>
        </Main>
      </Router>
    );
  }
}

export default App;
