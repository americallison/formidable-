import React, {useState} from 'react';

function Option() {
    const [option, setOption] = useState([])

    return (
        <>
            <div className=''>
            <input className="p-2 form-control" type="text" placeholder="Option1; Option2; Option3" />
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