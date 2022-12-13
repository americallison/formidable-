import React from 'react';
import LoginButton from './LoginButton';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';
import SignUpButton from './SignUpButton';

export default function MainNav() {
    return (
        <>
        <div className="navbar">
            <div><img src="" alt="" /></div>
            <div>
            <h1 className='text-2xl'>Formidable</h1>
            </div>
            <div>
                <Link to="/pricing"><p>Pricing</p></Link>
                <LoginButton />
                <SignUpButton />
            </div>
            </div>
        </>
    )
}