import React, {useState} from 'react';

export default function OpenEndedShort() {
    const [questionOpen, setQuestionOpen] = useState('')
    const [answerOpen, setAnswerOpen] = useState('')

    return (
           <div id="open_short" className='container shadow-sm'>
                <input type="text" placeholder="Question"/>
                <input type="text" placeholoder="Type Answer"/>
           </div>
    )
}