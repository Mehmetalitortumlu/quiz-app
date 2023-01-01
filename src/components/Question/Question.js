import React, { useContext } from 'react'
import QuestionContext from '../../context/QuestionContext'

function Question() {
    const { score, currentQuestion, questions } = useContext(QuestionContext);
    return (
        <div id='questionDiv'>
            <p> Question {currentQuestion + 1} out of {questions.length} </p>
            <p>Score : {score} </p>
        </div>
    )
}

export default Question