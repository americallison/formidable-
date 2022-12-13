import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginButton() {
    return (
        <>
        <div>
            <Link to="/login"><button className="text-end btn rounded bg-white text-dark">Login</button></Link>
        </div>
        </>
    )
}