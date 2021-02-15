import React from 'react'

const TripsContext = React.createContext({
  trips: [],

  deleteTripRequest: (tripId) => {
    const newTrips = this.state.trips.filter(t => 
      t.id !== tripId  
    )
    this.setState({ trips: newTrips })
  },

  editTripRequest: (updatedTrip) => {
    const newTrips = this.state.trips.map(tri => 
      (tri.id == updatedTrip.id)
        ?updatedTrip
        :tri
    )
    this.setState({ trips: newTrips })
  },
})


export default TripsContext;