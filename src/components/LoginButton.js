import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginButton() {
    return (
        <>
        <div className='text-2xl'>
            <Link to="/login"><button>Login</button></Link>
        </div>
        </>
    )
}