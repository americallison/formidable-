import React, { useState } from 'react';
import FormPreviewButton from './FormPreviewButton';
import AddQuestionButton from './AddQuestionButton';
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
    const [question, setQuestion] = useState("radio")

    function handleChange(e) {
        setQuestion(e.target.value)
    }

    return (
        <>
            <MainNav />
            <h1 className="h1">Formidable Form Creator</h1>
            <input type="text" placeholder="Form Title" /><br />
            <input type="text" placeholder="Form Description" />
            <form>
                <select name="questions" id="questions" value={question} onChange={handleChange}>
                    {questions.map((question) => (
                        <option value={question.value}>{question.label}</option>
                    ))}
                </select><br />
                <AddQuestionButton /><br />
                <FormPreviewButton />
                <button>Submit Form</button>
            </form>
         <p className="text-danger">{question}</p>

         
        </>
    )
}