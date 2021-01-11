import React from 'react'
import './NewTrip.css'

function NewTrip() {

    return (
        <form className='new-trip-form'>
            <label htmlFor='trip-name'>Trip Name: </label>
            <input type='text' id='trip-name' name='trip-name' required/><br />
            <label htmlFor='places_of_interest'>Places of Interest: </label><br />
            <textarea id='places' name='places' type='text' cols="40" rows="5" required /><br />
            <label htmlFor='fav-part'>Favorite Part: </label>
            <input type='text' id='fav-part' name='fav-part' required/><br /><br />
            <label>Add photos to trip: </label><br />
            <input/><button>upload</button><br />
            <input/><button>upload</button><br />
            <input/><button>upload</button><br />
            
            

        </form>
    )
}

export default NewTrip;