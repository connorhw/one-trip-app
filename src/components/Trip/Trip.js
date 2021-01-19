import React from 'react'
import {Link} from 'react-router-dom'


export default function Trip(props) {
    return (
        <div className='Trip'>
            <Link key={props.id} to={`/trips/${props.id}`}>
              <p>{props.name}</p>
            </Link>
        </div>
    );
}