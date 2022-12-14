import React from 'react';
import { Link
 } from 'react-router-dom';
export default function AddQuestionButton () {
    return (
        <>
            <Link to="/questions"><button className='btn rounded bg-dark text-white p-2 m-2'>Add Item</button></Link>
        </>
    )
}