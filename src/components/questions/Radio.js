import React from 'react';
import { Option } from './Checkbox'


export default function Radio()  {
    return (
        <>
           <div className="container shadow-sm rounded p-3">
                <input type="text" className="mb-4 form-control" placeholder="Question" />
                <Option />
           </div>
        </>
    )
}