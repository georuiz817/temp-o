import React from 'react'
import { HouseDoorFill } from 'react-bootstrap-icons';
export default function NavBar({history}) {
    return (
        <div className='nav'>
            <h1 onClick={() => {history.push('/')}} ><HouseDoorFill className='house'/></h1>
        </div>
    )
}
