import React from 'react'
//import { render } from "@testing-library/react"
import { Component } from "react"
import "./TripPage.css"

export default class TripPage extends Component {

    render() {
        return (
            <section>
                <h3>-- Trip name here --</h3>
                <h3>-- Places of interest here --</h3>
                <h3>-- Your favorite part of the trip here --</h3>
                <h3>-- Photo #1 --</h3>
                <h3>-- Photo #2 --</h3>
                <h3>-- Photo #3 --</h3>
            </section>
        )
    }
}