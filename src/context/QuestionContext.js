import { createContext, useState } from 'react';


const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinalResutls, setFinalResults] = useState(false);
    const questions = [
        {
            text: "What is the capital of Turkey?",
            options: [
                { id: 0, text: "Adana", isCorrect: false },
                { id: 1, text: "İzmir", isCorrect: false },
                { id: 2, text: "İstanbul", isCorrect: false },
                { id: 3, text: "Ankara", isCorrect: true },
            ],
        },
        {
            text: "What year was the Constitution of Turkey written?",
            options: [
                { id: 0, text: "1982", isCorrect: true },
                { id: 1, text: "1955", isCorrect: false },
                { id: 2, text: "1932", isCorrect: false },
                { id: 3, text: "1933", isCorrect: false },
            ],
        },
        {
            text: "Who was the first president of the Turkey?",
            options: [
                { id: 0, text: "Atatürk", isCorrect: true },
                { id: 1, text: "İsmet İnönü", isCorrect: false },
                { id: 2, text: "Fatih Sultan Mehmet", isCorrect: false },
                { id: 3, text: "Benjamin Franklin", isCorrect: false },
            ],
        },
        {
            text: "What is the largest state in the Turkey?",
            options: [
                { id: 0, text: "Adana", isCorrect: false },
                { id: 1, text: "Konya", isCorrect: true },
                { id: 2, text: "Ankara", isCorrect: false },
                { id: 3, text: "İstanbul", isCorrect: false },
            ],
        },
        {
            text: "Which of the following countries DO NOT border the Turkey?",
            options: [
                { id: 0, text: "Azerbaycan", isCorrect: false },
                { id: 1, text: "Amerika", isCorrect: true },
                { id: 2, text: "Yunanistan", isCorrect: false },
                { id: 3, text: "Bulgaristan ", isCorrect: false },
            ],
        },
    ];

    const values = {
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        showFinalResutls,
        setFinalResults,
        questions,
    }

    return (
        <QuestionContext.Provider value={values}>
            {children}
        </QuestionContext.Provider>
    )
};


export default QuestionContext;