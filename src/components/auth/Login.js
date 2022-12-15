import React from 'react';
import { Link } from 'react-router-dom';
import MainNav from '../MainNav';

export default function Login() {
    return (
        <>
            <MainNav />
            <div className='container mt-5'>
           
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4 bg-light shadow-sm rounded p-5'>
                    <h2 className='h2 text-center'>Login</h2><hr />
            <form>
                <input className="form-control" type="text" placeholder="username" /><br />
                <input className="form-control mb-4" type="text" placeholder="password" />
                <Link to="/signup" className='nav-link text-info'><p>New user? Sign up here</p></Link>
                <button  className='btn btn-success rounded p-2 m-1 w-100'>Login</button>
                <p className='text-center'>or</p>
                <button className='btn btn-dark rounded p-2 m-1 w-100'>Login with Facebook</button>
            </form>
            </div>
            <div className='col-md-4'></div>
            </div>
            </div>
        </>
    )
}