import React from 'react';
import { Link } from 'react-router-dom';
import pic from '/workspace/formidable-/src/images/formidable.jpg'

export default function Home () {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className='col-md-6 col-12 p-5 mt-md-5 mt-3'>
            <h1 className='display-3'>Create forms easily</h1>
            <p className='container'>Create forms easily to collect meaningful data and scale your business and school.</p>
            <div>
                <Link to="/formcreation"><button className='p-2 m-2 btn bg-white text-dark'>Create Form</button></Link>
                <Link to="/pricing"><button className='p-2 btn m-2 rounded bg-white text-dark'>Pricing</button></Link>
            </div>  
            </div>
            <div className='col-md-6 col-12 m-0'>
                <img src={pic} className="w-100 h-100" alt="pic" />
            </div>
            </div>
        </div>
        </>
    )
}
