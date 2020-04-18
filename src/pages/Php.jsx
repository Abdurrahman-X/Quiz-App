import React, { useState } from "react"
import Results from "./Results.jsx"
import GlobalStyle from "../components/Style/GlobalStyle"
import Php from "../images/python.png"
import { Wrapper, Sideright } from "../components/Style/HomeStyle"
import { Sideleft } from "../components/Style/ResultStyle"
import { Answer, Container } from "../components/Style/QuizzStyle"

const PhpQuizz = () => {
  const [questions] = useState([
    {
      question: "What does PHP stand for?",
      answers: [
        { text: "Personal Hypertext Processor", value: "0" },
        { text: "Hypertext Preprocessor", value: "1" },
        { text: "Private Home Page", value: "2" },
      ],
      answer: 1,
    },
    {
      question: `PHP server scripts are surrounded by delimiters, which?`,
      answers: [
        { text: "<?php></?>", value: "0" },
        { text: "<script><script/>", value: "1" },
        { text: "<&></&>", value: "2" },
        { text: "<?php...?>", value: "3" },
      ],
      answer: 3,
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
                name="php"
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
          <img src={Php} alt="php logo" />
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

export default PhpQuizz
