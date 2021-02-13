import React from 'react'
import { Link /*, BrowserRouter*/} from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {
    render() {
        return (
                <nav className='nav-bar'>
                    {/*<div className='hamburger'>☰</div>*/}
                    <div className='menu'>
                        {/*<Link to={`/`}>
                            Landing
                        </Link>*/}
                        <Link to={`/Home`}>
                            Home
                        </Link>
                        <Link to={`/Vault`}>
                            Vault
                        </Link>
                        <Link to={`/NewTrip`}>
                            New Trip
                        </Link>
                    </div>
                </nav>
        )
    }
}
