import config from '../../config'
import TokenService from '../services/token-service'

const TripsApiService = {
    getTrips() {
        return fetch(`${config.API_ENDPOINT}/trips`, {
            headers: {
                //'content-type': 'application/json',
                //'authorization': `Bearer ${TokenService.getAuthToken()}`,
                'Authorization': `Bearer ${config.API_TOKEN}`,
            },
        }) 
            .then(res => 
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
            )
    },
    getTrip(tripId) {
        return fetch(`${config.API_ENDPOINT}/trips/${tripId}`, {
            //'content-type': 'application/json',
            'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        })
            .then(res =>
                console.log(res)
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
    },
}

export default TripsApiService