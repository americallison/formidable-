import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../MainNav';

export default function Login() {
    return (
        <>
            <MainNav />
            <div className='login'>
            <h4>Login</h4>
            <form>
                <input type="text" placeholder="username" /><br />
                <input type="text" placeholder="password" />
                <Link to="#"><p>New user? Sign up here</p></Link>
                <button className='form_button'>Login</button>
                <p>or</p>
                <button  className='form_button'>Login with Facebook</button>
            </form>
            </div>
        </>
    )
}