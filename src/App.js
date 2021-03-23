import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav.js'
import Landing from './components/Landing/Landing.js';
import Home from './components/Home/Home.js';
import NewTrip from './components/NewTrip/NewTrip.js';
import Vault from '../src/components/Vault/Vault';
import SignIn from '../src/components/SignIn/SignIn';
import SignUp from '../src/components/SignUp/SignUp';
import TripsContext from './components/TripsContext/TripsContext.js';
//import { Context } from 'mocha';
import TripPage from './components/TripPage/TripPage.js';
import config from './config'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: []
    }
  }

  componentDidMount() {
    
    fetch('http://localhost:1337/api/trips', {
      method: 'GET',
      headers: {
        //'content-type': 'application/json',
        //'authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Authorization': `Bearer ${config.API_TOKEN}`,
      },
    })
    .then(res =>
      (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
    )
    .then(res => {
      this.setState({
        trips: res
      })
    })
  }

  render() {
    const contextValue = {
      trips: this.state.trips
    }
    console.log(contextValue)
    return (
      <TripsContext.Provider value={contextValue}>
      <BrowserRouter>
        <main className='App'>
          <header>
          <img src="https://user-images.githubusercontent.com/22334563/104141549-2fe45a80-536c-11eb-958c-44702bd13121.jpg" alt="suitcase" height="300" width="484"/>
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
              path='/TripPage'
              component={TripPage}
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
            <Route
              exact
              path='/trips/:tripId'
              component={TripPage}
            
            />
  
          </div>
          {/* content goes here */}
        </main>
      </BrowserRouter>
      </TripsContext.Provider>
    );
  }
}

export default App;