import React from 'react'
import './NewTrip.css'
import ImageUploader from 'react-images-upload';

function NewTrip() {

    return (
        <form className='new-trip-form'>
            <label htmlFor='trip-name'>Trip Name: </label>
            <input type='text' id='trip-name' name='trip-name' required/><br />
            <label htmlFor='places_of_interest'>Places of Interest: </label><br />
            <textarea id='places' name='places' type='text' cols="40" rows="5" required /><br />
            <label htmlFor='fav-part'>Favorite Part: </label>
            <input type='text' id='fav-part' name='fav-part' required/><br />
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={console.log('it works')} //{this.onDrop}
                //imgExtension={['.jpg ', '.gif ', '.png ', '.gif']}
                maxFileSize={5242880}
            />
        </form>
    )
}

export default NewTrip;