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
            <div>
                <Link>edit trip</Link>
                <section>
                    <h3>Trip Name: {selected.trip_name}</h3>
                    <div>Places: {selected.places}</div>
                    <div>Favorite Part: {selected.fav_part}</div>
                    <div>Journal: {selected.journal}</div>
                </section>
                <button onClick={() => this.deleteTrip(selected.id)}>delete</button>
            </div>
        )
    }
}


