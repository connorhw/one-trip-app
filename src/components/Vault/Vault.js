import React from 'react'
//import { Link } from 'react-router-dom'
import './Vault.css'
import TripsContext from '../TripsContext/TripsContext'
import Trip from '../Trip/Trip'
import { Component } from 'react'


class Vault extends Component {
    static contextType = TripsContext;
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
}

export default Vault;

Vault.defaultProps = {
    trips: [],
}