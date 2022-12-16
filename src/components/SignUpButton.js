import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpButton() {
    return (
        <>
        <div>
            <Link to="/signup"><button className='btn rounded bg-white text-dark text-end'>
            <FontAwesomeIcon icon={faUser} />&nbsp;Sign Up</button></Link>
        </div>
        </>
    )
}