import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav.js'
import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home.js';
import NewTrip from './components/NewTrip/NewTrip.js';
import Vault from '../src/components/Vault/Vault';
import SignIn from '../src/components/SignIn/SignIn';
import SignUp from '../src/components/SignUp/SignUp';

class App extends Component {
  render() {

  
    return (
      <BrowserRouter>
        <main className='App'>
          <header>
            Header pic here
          </header>
          <div className='content'>
            <h2>One Trip</h2>
            <Nav />
            <Route 
              exact
              path='/'
              component={Landing}
            />
            <Route 
              exact
              path='/Home'
              component={Home}
            />
            <Route 
              exact
              path='/NewTrip'
              component={NewTrip}
            />
            <Route 
              exact
              path='/Vault'
              component={Vault}
            />
            <Route 
              exact
              path='/SignIn'
              component={SignIn}
            />
            <Route 
              exact
              path='/SignUp'
              component={SignUp}
            />
  
          </div>
          {/* content goes here */
            
          }
        </main>
      </BrowserRouter>
    );
  }
}

export default App;