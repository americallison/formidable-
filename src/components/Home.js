import React from 'react';
import { Link } from 'react-router-dom';

export default function Home () {
    return (
        <>
            <h1>Create forms easily</h1>
            <h5>Create forms easily to collect meaningful data and scale your business and school.</h5>
            <div>
                <Link to="/formcreation"><button>Create Form</button></Link>
            </div>  
            <div>
                <img src="" alt="" />
            </div>

        </>
    )
}
