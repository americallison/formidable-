import React from 'react';

export default function FormPreview({formTitle, formDescription}) {
    return(
        <>
        <h3 className='h3 text-center'>Form Preview</h3>
        <div className="card text-white bg-success border-left">
        <p className="text-center card-header h3 bg-light p-2 mb-2 shadow-sm"><span className="text-success">{formTitle}</span></p>
        <p className="text-center card-body p-2 mb-2">{formDescription}</p>
        </div>
        </>
    )
}