import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpButton() {
    return (
        <>
        <div>
            <Link to="/signup"><button  className='btn rounded bg-white text-dark text-end'>Sign Up</button></Link>
        </div>
        </>
    )
}