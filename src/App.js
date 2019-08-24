import React, { Component} from "react";
import { Route, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';

import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Home from './pages/Home';
import All from './pages/All';
import "./App.css";
import { Toolbar } from "@material-ui/core";


const theme = createMuiTheme({
  palette: {
    primary:  { main: orange[700] }
  },
});

class App extends Component {
  render() {
    const App = () => (
      <div>
        <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              News
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/*' component={All}/>
        </Switch>
        </ThemeProvider>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
