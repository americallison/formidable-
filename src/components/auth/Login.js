import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../MainNav';

export default function Login() {
    return (
        <>
            <MainNav />
            <div className='container'>
            <h4>Login</h4>
            <form>
                <input className="form-control" type="text" placeholder="username" /><br />
                <input className="form-control"  type="text" placeholder="password" />
                <Link to="/signup"><p>New user? Sign up here</p></Link>
                <button  className='btn btn-success rounded p-2 m-2'>Login</button>
                <p>or</p>
                <button className='btn btn-success rounded p-2 m-2'>Login with Facebook</button>
            </form>
            </div>
        </>
    )
}