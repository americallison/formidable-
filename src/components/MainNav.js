import React from 'react';
import LoginButton from './LoginButton';
import Pricing from './Pricing';
import { Link } from 'react-router-dom';

export default function MainNav() {
    return (
        <>
            <img src="" alt="" />
            <h1>Formidable</h1>
            <div>
                <Link to="/pricing"><p>Pricing</p></Link>
                <LoginButton />
            </div>
        </>
    )
}