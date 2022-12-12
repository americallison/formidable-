import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../MainNav';

export default function Login() {
    return (
        <>
        <MainNav />
            <h4>Login</h4>
            <input type="text" placeholder="username" /><br />
            <input type="text" placeholder="password" />
            <Link to="#"><p>New user? Sign up here</p></Link>
            <button>Login</button>
            <p>or</p>
            <button>Login with Facebook</button>
        </>
    )
}