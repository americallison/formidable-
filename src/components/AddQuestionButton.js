import React from 'react';


export default function AddQuestionButton ({questionAll, handleAdd}) {

    function handleAdd(e) {
        e.preventDefault();
        questionAll.push("This is my question")
    }

    return (
        <>
            <button className='btn rounded bg-dark text-white p-2 m-2' onClick={handleAdd}>Add Item</button>
        </>
    )
}