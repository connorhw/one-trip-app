import React, { Component } from 'react'

const TripListContext = React.createContext({
  tripList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTripList: () => {},
})
export default TripListContext

export class TripListProvider extends Component {
  state = {
    tripList: [],
    error: null,
  };

  setTripList = tripList => {
    this.setState({ tripList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      tripList: this.state.tripList,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTripList: this.setTripList,
    }
    return (
      <TripListContext.Provider value={value}>
        {this.props.children}
      </TripListContext.Provider>
    )
  }
}
