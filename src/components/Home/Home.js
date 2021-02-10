import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <h3>Document each trip for free. Treat this application as a travel journal.</h3>
            <ul>
                <li>The 'Vault' is your personal repository, containing all your recorded trips</li>
                <li>'New Plant' allows you to create new trips that you can access from your vault</li>
                <li>You're able to edit or delete any of the trips</li>
            </ul>
            <Link to={`SignIn`}>Sign In</Link>
            <Link to={`SignUp`}>Sign Up</Link>
            
           
        </div>
    )
}

export default Home;