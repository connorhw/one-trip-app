import React from 'react'
//import { render } from "@testing-library/react"
import { Component } from "react"
import TripsContext from '../TripsContext/TripsContext'
import "./TripPage.css"

export default class TripPage extends Component {
    static contextType = TripsContext
    render() {
        console.log('props:')
        console.log(this.context)
        const selected = this.context.trips.find(trip => {
            return (this.props.match.params.tripId == trip.id)
        })
        return (
            <section>
                <h3>{selected.trip_name}</h3>
                <div>{selected.places}</div>
                <div>{selected.fav_part}</div>
                <div>{selected.journal}</div>
            </section>
        )
    }
}


