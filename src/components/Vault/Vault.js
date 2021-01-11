import React from 'react'
import { Link } from 'react-router-dom'
import './Vault.css'
import TripContext from '../TripContext/TripContext'


class Vault extends React.Component {
    static contextType = TripContext
    render() {
        console.log('context is', this.context)
        return (
            <div className='vault'>
            <h3>All the places you've been:</h3>
            <Link to={'/TripPage'}>Example trip page here</Link>
                {   
                    Object.keys(this.context.trips).map((trip, index) => {
                        return (
                            <p key={index}>{this.context.trips[trip][0].trip_name}</p>
                        )
                    })
                }
            </div>
        )
    }
    
        
    
}

export default Vault;