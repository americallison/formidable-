import React, {useState} from 'react';

function Option() {
    const [option, setOption] = useState("Option 1")

    return (
        <>
            <div className=''>
                <label><input type="text" placeholder={option} /></label>
            </div>
        </>
    )
}

export default function Checkbox()  {
    return (
        <>
           <div className="container shadow-sm rounded p-3">
                <input type="text" className="mb-4 form-control" placeholder="Question" />
                <Option />
           </div>
        </>
    )
}