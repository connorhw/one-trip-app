import config from '../../config'

const TripsApiService = {
    getTrips() {
        return fetch(`${config.API_ENDPOINT}/trips`)
            .then(res => 
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
            )
    },
    getTrip(tripId) {
        return fetch(`${config.API_ENDPOINT}/trips/${tripId}`)
            .then(res =>
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
}

//export default TripsApiService