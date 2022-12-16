import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../images/formidable.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <>

            <div className="container mb-3 mt-4">
                <h1 className='display-3'><FontAwesomeIcon icon={faEdit} />
                    &nbsp;Create forms easily</h1>
                <p className='container'>Create forms easily to collect meaningful data and scale your business and school.</p>
                <Link to="/formcreation"><button className='p-2 m-2 btn bg-success text-white rounded'>
                    <FontAwesomeIcon icon={faEdit} />
                    &nbsp;Create Form</button></Link>
                <Link to="/pricing"><button className='p-2 btn m-2 rounded bg-dark text-white rounded'>
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
            &nbsp;Pricing</button></Link>
            </div>
            <img src={pic} className="w-100 img-fluid" alt="pic" />

        </>
    )
}
