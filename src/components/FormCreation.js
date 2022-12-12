import React from 'react';
import MainNav from './MainNav';

export default function FormCreation () {
    return (
        <>
        <MainNav />
            <h1>Formidable Form Creator</h1>
            <input type="text" placeholder="Form Title" /><br />
            <input type="text" placeholder="Form Description" />
            <form>
                <select>
                    <option>Select question type</option>
                    <option>Open-ended (short)</option>
                    <option>Checkbox</option>
                    <option>Open-ended (short)</option>
                    <option>Open-ended (long)</option>
                    <option>Multiple choice</option>
                </select>
            </form>
            <button>Preview Form</button>
            <button>Submit Form</button>
        </>
    )
}