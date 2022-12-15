import React from 'react';

export default function OpenEndedLong()  {

    return (
        <>
           <div className="shadow-sm container p-4 rounded">
            <input className="form-control border-bottom border-top-0 border-right-0" type="text" placeholder="Question title" /><br />
            <textarea className="form-control" disabled placeholder="Enter Answer" />
           </div>
        </>
    )
}