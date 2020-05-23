import React from 'react'
import './NewTrip.css'

function NewTrip() {
    return (
        <form className='new-trip-form'>
            <label htmlFor='trip-name'>Trip Name: </label>
            <input type='text' id='trip-name' name='trip-name' required/><br />
            <label htmlFor='description'>Description: </label><br />
            <textarea id='description' name='description' type='text' cols="40" rows="5" required /><br />
            
        </form>
    )
}

export default NewTrip;