import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Results from "../components/results"
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
  Content,
  Error,
  Container,
} from "../components/Style/QuizzStyle"

const QuizzPage = ({pathname,questions}) => {
  useEffect(() => {
    if (pathname === "javascript") {
      setPage("javascript")
    } else if (pathname === "php") {
      setPage("php")
    } else if (pathname === "python") {
      setPage("python")
    }
  }, [pathname,questions])

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
    return <Error style={{ color: "red", fontSize: "20px" }}>{error}</Error>
  }

  const nextQuestion = () => {
    if (!selectedAnswer) {
      setError("Please select answer")
    } else {
      questions[questionIndex].correct_answer === selectedAnswer
        ? setCorrectAnswers(correctAnswers + 1)
        : setWrongAnswers(wrongAnswers + 1)
      setSelectedAnswer(null)
      if (questionIndex < questions.length - 1) {
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
          numberOfQuestions={questions.length}
          retakeTest={retakeTest}
        />
      )
    } else {
      return (
        <div>
          {questions[questionIndex].answers.map((answer, i) => (
            <Answer key={i}>
              <AnswerInput
                answer={answer}
                selectedAnswer={selectedAnswer}
                onChange={e => handleCheck(e)}
              />
              <label htmlFor={answer.text}> {answer.text}</label>
            </Answer>
          ))}
          <div style={{ textAlign: "center" }}>
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
              <img src={Js} alt="quizz logo" />
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
                {/* <h5>
                  Question {questionIndex + 1} of {questions.length}
                </h5> */}
                <h4>{questions[questionIndex].question}</h4>
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
