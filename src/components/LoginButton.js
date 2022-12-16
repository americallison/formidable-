import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignIn } from '@fortawesome/free-solid-svg-icons'


export default function LoginButton() {
    return (
        <>
        <div>
            <Link to="/login">
                <button className="text-end btn rounded bg-white text-dark">
                <FontAwesomeIcon icon={faSignIn} />&nbsp;Login</button></Link>
        </div>
        </>
    )
}