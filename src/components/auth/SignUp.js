import React from 'react';

export default function SignUp () {
    return (
        <>
        <div className='signup'>
        <h1 className=''>Sign Up</h1>
        <form>
            <input type="text" placeholder='first name' />
            <input type="text" placeholder='last name' /> 
            <input type="text" placeholder='username' />
            <input type="text" placeholder='email' />
            <input type="text" placeholder='password' />
            <input type="text" placeholder='repeat password' />
            <label>
                <input type="checkbox" />
                Accept Terms and Conditions
            </label>
        </form>
        </div>
        </>
    )
}