import React, { useContext } from 'react'
import QuestionContext from '../../context/QuestionContext'

function QuestionList() {
    const { score, setFinalResults, currentQuestion, questions, showFinalResutls, setScore, setCurrentQuestion } = useContext(QuestionContext);

    const optionClicked = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        };

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setFinalResults(true)
        };
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setFinalResults(false);
    };
    
    return (
        <div>
            {
                showFinalResutls ?
                    <div id='final-results'>
                        <h1> Final results </h1>
                        <h2>
                            {score} out of {questions.length} correct-({(score / questions.length) * 100} %)
                        </h2>
                        <button onClick={restartGame}>Restart game</button>
                    </div>
                    :
                    <div id='questionList'>
                        <h3> {questions[currentQuestion].text} </h3>
                        <ul>
                            {questions[currentQuestion].options.map((option) => {
                                return (
                                    <li onClick={() => optionClicked(option.isCorrect)} key={option.id}> {option.text}  </li>
                                )
                            })}
                        </ul>
                    </div>
            }
        </div>
    )
}

export default QuestionList