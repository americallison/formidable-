import React from 'react';
import MainNav from '../MainNav';

export default function SignUp () {
    return (
        <>
        <MainNav />
        <div className='container'>
        <h3 className='h3'>Sign Up</h3>
        <form>
            <input className="form-control" type="text" placeholder='first name' /><br />
            <input className="form-control" type="text" placeholder='last name' /> <br />
            <input className="form-control" type="text" placeholder='username' /><br />
            <input className="form-control" type="text" placeholder='email' /><br />
            <input className="form-control" type="text" placeholder='password' /><br />
            <input className="form-control" type="text" placeholder='repeat password' /><br />
            <label className='form-label'>
                <input type="checkbox" />
                Accept Terms and Conditions
            </label><br />
            <button className="btn btn-success rounded p-2 m-2">Sign Up</button>
        </form>
        </div>
        </>
    )
}