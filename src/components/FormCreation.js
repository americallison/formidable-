import React, { useState } from 'react';
import AddQuestionButton from './AddQuestionButton';
import FormSubmitButton from './FormSubmitButton';
import MainNav from './MainNav';


const questions = [
    {
        label: "Radio",
        value: "radio",
    },

    {
        label: "Multiple Choice",
        value: "multiple choice",
    },

    {
        label: "Open Ended (short)",
        value: "open ended short",
    },

    {
        label: "Open Ended (long)",
        value: "open ended long",
    }


]

export default function FormCreation() {
    const [formTitle, setFormTitle] = useState('Untitled');
    const [formDescription, setFormDescription] = useState(' ')
    const [question, setQuestion] = useState("radio")

    return (
        <>
            <MainNav />
            <div className='container mt-5 p-2'>
            <h1 className="h1 display-5 text-center">Formidable Form Creator</h1><hr />
            <div className="row">
                <div className='col-md-3'></div>
                <div className='col-md-6 shadow-sm p-4 rounded'>
                <form className=''>
                 <input className="form-control" type="text" placeholder="Form Title" onChange={(e) => setFormTitle(e.target.value)} /><br />
                 <textarea className="form-control" placeholder="Form Description" onChange={(e) => setFormDescription(e.target.value)}  /><br />
              <p>Select Question Type</p>
                <select className="form-control" name="questions" id="questions" value={question} onChange={(e) => setQuestion(e.target.value)} >
                    {questions.map((question) => (
                        <option value={question.value}>{question.label}</option>
                    ))}
                </select><br />
                <AddQuestionButton />
                <FormSubmitButton />
            </form>
         <p className="text-danger">{question}</p>
         <p className="text-danger">Form Title: {formTitle}</p>
         <p className="text-danger">Form Description: {formDescription}</p>
         </div>
         <div className='col-md-3'></div>
         </div>
         </div>
         
        </>
    )
}