import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'

function Landing() {
    return (
      
            <div className='landing'>
                <div>
                    Document each trip for free. Treat this application as a travel journal.
                </div><br /><br />
                <label>Have an account?</label>
                <Link to={`/SignIn`} className='form-link'>Sign In</Link>
                <label>Want an account?</label>
                <Link to={`/SignUp`} className='form-link'>Sign Up</Link>
            </div>
        
    )
}

export default Landing;
