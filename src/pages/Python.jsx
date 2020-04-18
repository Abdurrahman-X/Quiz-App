import React, { useState } from "react"
import Results from "./Results.jsx"
import GlobalStyle from "../components/Style/GlobalStyle"
import Python from "../images/python.png"
import { Wrapper, Sideright } from "../components/Style/HomeStyle"
import { Sideleft } from "../components/Style/ResultStyle"
import { Answer, Container } from "../components/Style/QuizzStyle"

const PythonQuizz = () => {
  const [questions] = useState([
    {
      question: "In Python 3, the maximum value for an integer is 263 - 1:",
      answers: [
        { text: "False", value: "0" },
        { text: "True", value: "1" },
      ],
      answer: 0,
    },
    {
      question: `Which of the following are valid ways to specify the string literal foo'bar in Python:

      `,
      answers: [
        { text: `"foo'bar"`, value: "0" },
        { text: `'foo'bar'`, value: "1" },
        { text: `'foo\'bar'`, value: "2" },
        { text: `'foo''bar'`, value: "3" },
      ],
      answer: 2,
    },
  ])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showResults, setShowResults] = useState(false)

  const nextQuestion = () => {
    questions[questionIndex].answer == selectedAnswer
      ? setCorrectAnswers(correctAnswers + 1)
      : setWrongAnswers(wrongAnswers + 1)
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1)
    } else {
      setShowResults(true)
    }
  }
  const retakeTest = () => {
    setShowResults(false)
    setCorrectAnswers(0)
    setWrongAnswers(0)
    setQuestionIndex(0)
  }
  const showQuestions = () => {
    if (showResults === true) {
      return (
        <Results
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          numberOfQuestions={questions.length}
          retakeTest={retakeTest}
        />
      )
    } else {
      return (
        <div>
          {questions[questionIndex].answers.map((answer, i) => (
            <Answer key={i}>
              <input
                type="radio"
                name="python"
                value={answer.value}
                onChange={e => setSelectedAnswer(e.target.value)}
              />
              <label htmlFor={answer.text}> {answer.text}</label>
            </Answer>
          ))}
          <button onClick={nextQuestion}>Next</button>
        </div>
      )
    }
  }
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sideleft>
          <img src={Python} alt="python logo" />
          {showResults ? (
            <h4> Congratulations! You completed the test </h4>
          ) : (
            <h4>{questions[questionIndex].question}</h4>
          )}
        </Sideleft>
        <Sideright>
          <Container>{showQuestions()}</Container>
        </Sideright>
      </Wrapper>
    </>
  )
}

export default PythonQuizz
