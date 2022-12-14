import React from 'react';

export default function OpenEndedLong()  {

    return (
        <>
           <div className="shadow-sm container p-4 rounded">
            <input className="form-control" type="text" placeholder="Question title" /><br />
            <textarea className="form-control" placeholder="Enter Answer" />
           </div>
        </>
    )
}