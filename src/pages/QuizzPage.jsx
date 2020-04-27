import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Results from "./Results.jsx"
import AnswerInput from "../components/AnswerInput"
import GlobalStyle from "../components/Style/GlobalStyle"
import Js from "../images/js_logo.png"
import Php from "../images/php_logo.png"
import Python from "../images/py_logo.png"
import {
  Sideleft,
  Logo,
  Sideright,
  Wrapper,
  Answer,
  Container,
  Content
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
      setError("Please select answer")
    } else {
      props.questions[questionIndex].correct_answer == selectedAnswer
        ? setCorrectAnswers(correctAnswers + 1)
        : setWrongAnswers(wrongAnswers + 1)
        setSelectedAnswer(null)
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
              <AnswerInput answer={answer} selectedAnswer={selectedAnswer} onChange={e => handleCheck(e)} />
              <label htmlFor={answer.text}> {answer.text}</label>
            </Answer>
          ))}
          <div style={{textAlign:'center'}}>
          <button onClick={nextQuestion}>Next</button>
          </div>
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
              <img src={Js}  alt="quizz logo" />
            ) : page === "php" ? (
              <img src={Php} alt="quizz logo" />
            ) : page === "python" ? (
              <img src={Python} alt="quizz logo" />
            ) : null}
          </Logo>
          {showResults ? (
            <h4> Congratulations! You completed the test </h4>
          ) : (
            <>
            <Content>
              <h5>
                Question {questionIndex + 1} of {props.questions.length}
              </h5>
              <h4>{props.questions[questionIndex].question}</h4>
            </Content>
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
