import config from '../../config'
import TokenService from '../services/token-service'

const TripsApiService = {
    getTrips() {
        return fetch(`${config.API_ENDPOINT}/trips`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        }) 
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

export default TripsApiService