import React from 'react';

export default function Questions({questionsAll}) {
    return (
        <>
        {
            questionsAll.map((form_question) => (
                   <div className='shadow-sm bg-light p-2 m-2'>
                     <ul>
                        <li>{form_question}</li>
                     </ul>
                   </div>
                ))
        }
        </>
    )
}