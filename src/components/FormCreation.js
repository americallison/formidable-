import React, { useState } from 'react';
import AddQuestionButton from './AddQuestionButton';
import FormSubmitButton from './FormSubmitButton';
import MainNav from './MainNav';
import OpenEndedLong from './questions/OpenEndedLong';
import OpenEndedShort from './questions/OpenEndedShort';
import Radio from './questions/Radio';
import Checkbox from './questions/Checkbox';
import MultipleChoices from './questions/MultipleChoices';


const questions = [
    {
        label: "Radio",
        value: "radio",
        name: "radioName",
    },

    {
        label: "Multiple Choice",
        value: "multiple choice",
        name: "multipleChoiceName",
    },

    {
        label: "Open Ended (short)",
        value: "open ended short",
        name: "openEndedShortName",
    },

    {
        label: "Open Ended (long)",
        value: "open ended long",
        name: "openEndedLongName",
    },

    {
        label: "Checkbox",
        value: "checkbox",
        name: "checkboxName",
    }

]




export default function FormCreation() {
    const [formTitle, setFormTitle] = useState('Untitled');
    const [formDescription, setFormDescription] = useState(' ')
    const [question, setQuestion] = useState("radio")
    const [isSelected, setIsSelected] = useState({
        isActive: true,
        name: "radioName",
    })
 
    function handleActive (e) {
        e.preventDefault();
        console.log("value", e.target)
        setIsSelected({
         isActive: true,
         name: e.target.value
        })

        setQuestion(e.target.value)
   } 

    return (
        <>
            <MainNav />
            <div className='container mt-5 p-2'>
            <h1 className="h1 display-5 text-center">Formidable Form Creator</h1><hr />
            <div className="row">
                <div className='col-md-3'></div>
                <div className='col-md-6 shadow-sm p-4 rounded'>
                <form className=''>
                 <input className="form-control border-none" type="text" placeholder="Form Title" onChange={(e) => setFormTitle(e.target.value)} /><br />
                 <textarea className="form-control" placeholder="Form Description" onChange={(e) => setFormDescription(e.target.value)} /><br />
              <p>Select Question Type</p>
                <select className="form-control" id={question.name} value={question} onChange={handleActive} >
                    {questions.map((ques) => (
                        <option key={ques.label} value={ques.name}>{ques.label}</option>
                    ))}
                </select><br />
                <div className="mb-3 bg-light">
                    {
                    isSelected.isActive && isSelected.name === "openEndedShortName" ? (<OpenEndedShort />): isSelected.isActive && isSelected.name === "Radio" ? (<Radio />):
                     isSelected.isActive && isSelected.name === "openEndedLongName" ? (<OpenEndedLong />): isSelected.isActive && isSelected.name === "checkboxName" ? (<Checkbox />): (<MultipleChoices />)
                     }
                </div>
                <AddQuestionButton />
                <FormSubmitButton />
            </form>
            <div>
            
    
         <p className="text-danger">{question}</p>
         <p className="text-danger">Form Title: {formTitle}</p>
         <p className="text-danger">Form Description: {formDescription}</p>
         </div>
         <div className='col-md-3'></div>
         </div>
         </div>
         </div>
        </>
    )
}