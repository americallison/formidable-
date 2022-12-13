import React from 'react';
import MainNav from '../MainNav';

export default function SignUp () {
    return (
        <>
        <MainNav />
        <div className='signup'>
        <h1 className=''>Sign Up</h1>
        <form>
            <input type="text" placeholder='first name' /><br />
            <input type="text" placeholder='last name' /> <br />
            <input type="text" placeholder='username' /><br />
            <input type="text" placeholder='email' /><br />
            <input type="text" placeholder='password' /><br />
            <input type="text" placeholder='repeat password' /><br />
            <label>
                <input type="checkbox" />
                Accept Terms and Conditions
            </label><br />
            <button className="">Sign Up</button>
        </form>
        </div>
        </>
    )
}