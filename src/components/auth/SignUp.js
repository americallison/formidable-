import React from 'react';
import MainNav from '../MainNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function SignUp () {
    return (
        <>
        <MainNav />
        <div className='container mt-5'>
           <div className='row'>
               <div className='col-md-4'></div>
               <div className='col-md-4 bg-light shadow-sm rounded p-5'>
               <h4 className='h4 text-center'>
                        
        <FontAwesomeIcon icon={faUser} />&nbsp;Sign Up</h4><hr />
        <form>
            <input className="form-control" type="text" placeholder='first name' /><br />
            <input className="form-control" type="text" placeholder='last name' /> <br />
            <input className="form-control" type="text" placeholder='username' /><br />
            <input className="form-control" type="text" placeholder='email' /><br />
            <input className="form-control" type="text" placeholder='password' /><br />
            <input className="form-control" type="text" placeholder='repeat password' /><br />
            <label className='form-label'>
                <input type="checkbox" />&nbsp;
                Accept Terms and Conditions
            </label><br />
            <button className="btn btn-success rounded p-2 m-2">
            <FontAwesomeIcon icon={faUser} />&nbsp;Sign Up</button>
        </form>
        </div>
        <div className='col-md-4'></div>
        </div>
        </div>
        </>
    )
}