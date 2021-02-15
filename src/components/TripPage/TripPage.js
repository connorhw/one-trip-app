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
        return (
            <section>
                <h3>-- Trip name here --</h3>
                <h3>-- Places of interest here --</h3>
                <h3>-- Your favorite part of the trip here --</h3>
                <h3>-- Photo here --</h3>

            </section>
        )
    }
}


