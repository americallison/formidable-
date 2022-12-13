import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpButton() {
    return (
        <>
        <div className=''>
            <Link to="/signup"><button>Sign Up</button></Link>
        </div>
        </>
    )
}