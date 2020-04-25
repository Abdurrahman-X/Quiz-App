import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Results from "./Results.jsx"
import AnswerInput from "../components/AnswerInput"
import GlobalStyle from "../components/Style/GlobalStyle"
import Js from "../images/javascript.png"
import Php from "../images/Php.png"
import Python from "../images/Python.png"
import {
  Sideleft,
  Logo,
  Sideright,
  Wrapper,
  Answer,
  Container,
} from "../components/Style/QuizzStyle"

const QuizzPage = props => {
  useEffect(() => {
    if (props.pathname === "javascript") {
      setPage("javascript")
    } else if (props.pathname === "php") {
      setPage("php")
    } else if (props.pathname === "python") {
      setPage("python")
    }
  }, [])

  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState("")

  const handleCheck = e => {
    setSelectedAnswer(e.target.value)
    setError("")
  }

  const handlerError = () => {
    if (!error) {
      return
    }
    return <div style={{ color: "red", fontSize: "20px" }}>{error}</div>
  }

  const nextQuestion = () => {
    if (!selectedAnswer) {
      setError("select answer")
    } else {
      props.questions[questionIndex].answer === selectedAnswer
        ? setCorrectAnswers(correctAnswers + 1)
        : setWrongAnswers(wrongAnswers + 1)
      setSelectedAnswer(null)
      console.log(selectedAnswer)
      if (questionIndex < props.questions.length - 1) {
        setQuestionIndex(questionIndex + 1)
      } else {
        setShowResults(true)
      }
    }
  }
  const retakeTest = () => {
    setShowResults(false)
    setCorrectAnswers(0)
    setWrongAnswers(0)
    setQuestionIndex(0)
  }
  const showQuestions = () => {
    if (showResults) {
      return (
        <Results
          correctAnswers={correctAnswers}
          wrongAnswers={wrongAnswers}
          numberOfQuestions={props.questions.length}
          retakeTest={retakeTest}
        />
      )
    } else {
      return (
        <div>
          {props.questions[questionIndex].answers.map((answer, i) => (
            <Answer key={i}>
              <AnswerInput answer={answer} onChange={e => handleCheck(e)} />
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
          <Logo onClick={() => navigate(`/`)}>
            {page === "javascript" ? (
              <img src={Js} alt="quizz logo" />
            ) : page === "php" ? (
              <img src={Php} alt="quizz logo" />
            ) : page === "python" ? (
              <img src={Python} alt="quizz logo" />
            ) : null}

            <h5>{props.pathname}</h5>
          </Logo>
          {showResults ? (
            <h4> Congratulations! You completed the test </h4>
          ) : (
            <>
              <h5>
                Question {questionIndex + 1} of {props.questions.length}
              </h5>
              <h4>{props.questions[questionIndex].question}</h4>
            </>
          )}
        </Sideleft>
        <Sideright>
          <Container>
            {handlerError()}
            {showQuestions()}
          </Container>
        </Sideright>
      </Wrapper>
    </>
  )
}

export default QuizzPage
