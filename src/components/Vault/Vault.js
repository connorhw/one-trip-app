import React from 'react'
//import { Link } from 'react-router-dom'
import './Vault.css'
//import TripsContext from '../TripsContext/TripsContext'
import Trip from '../Trip/Trip'
import { Component } from 'react'
import TripsApiService from '../services/trip-api-service'
import TripListContext from '../TripsContext/TripListContext'
import { Section } from '../../components/Utils/Utils'


class Vault extends Component {
    static contextType = TripListContext;
    componentDidMount() {
        this.context.clearError()
        TripsApiService.getTrips()
            .then(this.context.setTripList)
            .then(this.context.setError)
    }

    renderTrips() {
        const { tripList = [] } = this.context
        return tripList.map(trip => 
            <Trip
                key={trip.id}
                trip={trip}
            />
            )
    }

    render() {
        const { error } = this.context
        return (
          <Section list className='Vault'>
            {error
              ? <p className='red'>There was an error, try again</p>
              : this.renderTrips()}
          </Section>
        )
      }
    /*
    render() {
        console.log('context is', this.context)
        return (
            <section className='vault'>
            <h3 className='vaultHeader'>All the places you've been:</h3>
            <ul>
                {this.context.trips.map(trip =>
                    <li key={trip.id}>
                        <Trip
                            id={trip.id}
                            name={trip.trip_name}
                        />
                    </li>
                )}
            </ul>
            </section>
        )
    }  
    */
}

export default Vault;

Vault.defaultProps = {
    trips: [],
}