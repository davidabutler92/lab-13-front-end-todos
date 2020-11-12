import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from "react-router-dom";
import Todos from './Todos.js';
import Login from './Login.js'
import SignUp from './SignUp.js'
import PrivateRoute from './PrivateRoute.js';
import { TOKEN, USERNAME } from './constants';
import Header from './Header.js';
import './App.css';

export default class App extends Component {
  state = { 
    userName: localStorage.getItem(USERNAME) || '',
    token: localStorage.getItem(TOKEN) || ''
  }

  handleTokenUserChange = (token, email) => {
    localStorage.setItem(USERNAME, email);
    localStorage.setItem(TOKEN, token);
    this.setState({ 
      userName: email,
      token: token 
    });
  }

  logout = () => {
    localStorage.setItem(USERNAME, '');
    localStorage.setItem(TOKEN, '');
    this.setState({ 
      userName: '',
      token: '' 
    });
  }

  render() {
    return (
      <div className='mainHeader'>
        <Router>
        <Header      
        userName={ this.state.userName }
        token={this.state.token}
        logout={this.logout}/>
          <Switch>
            <Route exact path='/login' render={(routerProps) => <Login 
                handleTokenUserChange={this.handleTokenUserChange} 
                {...routerProps} />} 
              />
            <Route 
            exact path='/signup' 
              render={(routerProps) => <SignUp 
                handleTokenUserChange={this.handleTokenUserChange} 
                {...routerProps}/>} 
              />
            <PrivateRoute 
              exact 
              path='/todos' 
              token={this.state.token} 
              render={(routerProps) => <Todos 
              {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}