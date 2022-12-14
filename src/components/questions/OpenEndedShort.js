import React, {useState} from 'react';

export default function OpenEndedShort({isSelected, setIsSelected}) {
    const [questionOpen, setQuestionOpen] = useState('')
    const [answerOpen, setAnswerOpen] = useState('')

    return (
        <div className="shadow-sm container p-4 rounded">
                <input type="text" className="mb-4 form-control" placeholder="Question" />
                <input type="text" className="mb-1 form-control" placeholder="Question" />
           </div>
    )
}