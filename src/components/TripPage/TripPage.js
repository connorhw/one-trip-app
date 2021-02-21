import React from 'react'
//import { render } from "@testing-library/react"
import { Component } from "react"
import { Link } from 'react-router-dom'
import TripsContext from '../TripsContext/TripsContext'
import "./TripPage.css"

export default class TripPage extends Component {
    static contextType = TripsContext

    deleteTrip = (tripId) => {

    }
    
    render() {
        console.log('props:')
        console.log(this.context)
        const selected = this.context.trips.find(trip => {
            return (this.props.match.params.tripId == trip.id)
        })
        return (
            <div className='trip-info'>
                <Link className='edit'>edit trip</Link>
                <section>
                    <h3>{selected.trip_name}</h3>
                    <label>Favorite Part:</label>
                    <div className='trip-favs'>{selected.fav_part}</div>
                    <label>Places:</label>
                    <div className='trip-places'>Places: {selected.places}</div>
                    <label>Journal:</label>
                    <div className='journal-section'>Journal: {selected.journal}</div>
                </section>
                <button onClick={() => this.deleteTrip(selected.id)}>delete</button>
            </div>
        )
    }
}


