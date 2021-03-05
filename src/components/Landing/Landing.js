import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'

function Landing() {
    return (
      
            <div className='landing'>
                {/*<div>
                <h3>Document each trip for free. Treat this application as a travel journal.</h3>
                    <ul>
                        <li>The 'Vault' is your personal repository, containing all your recorded trips</li>
                        <li>'New Plant' allows you to create new trips that you can access from your vault</li>
                        <li>You're able to edit or delete any of the trips</li>
                </ul>        
                </div><br /><br />*/}   
                <label>Have an account?</label>
                <Link to={`/SignIn`} className='form-link'>Sign In</Link>
                <label>Want an account?</label>
                <Link to={`/SignUp`} className='form-link'>Sign Up</Link>
            </div>
        
    )
}

export default Landing;
