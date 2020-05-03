import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Results from "../components/results"
import AnswerInput from "../components/AnswerInput"
import GlobalStyle from "../components/Style/GlobalStyle"
import Js from "../data/images/js_logo.png"
import Php from "../data/images/php_logo.png"
import Python from "../data/images/py_logo.png"

import Bounce from "react-reveal/Bounce"

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

const QuizzPage = ({ pathname }) => {
  useEffect(() => {
    if (pathname === "javascript") {
      setPage("JavaScript")
      import("../../static/javascript.json").then(module => {
        setQst(module.default)
      })
    } else if (pathname === "php") {
      setPage("Php")
      import("../../static/php.json").then(module => {
        setQst(module.default)
      })
    } else if (pathname === "python") {
      setPage("Python")
      import("../../static/python.json").then(module => {
        setQst(module.default)
      })
    }
  }, [pathname])

  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState("")
  const [questions, setQst] = useState([])

  const handleCheck = e => {
    setSelectedAnswer(e.target.value)
    setError("")
  }

  const handlerError = () => {
    if (!error) {
      return
    }
    return (
      <Bounce>
        <Error>{error}</Error>
      </Bounce>
    )
  }

  const nextQuestion = () => {
    if (!selectedAnswer) {
      setError("Please select an answer")
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
    } else if (questions.length != 0) {
      return (
        <div>
          {questions[questionIndex].answers.map((answer, i) => (
            <Answer key={i}>
              <AnswerInput
                answer={answer}
                selectedAnswer={selectedAnswer}
                onChange={e => handleCheck(e)}
              />
              <label
                style={{
                  fontFamily: `Quicksand, sans-serif `,
                  lineHeight: "23px",
                }}
                htmlFor={answer.text}
              >
                {" "}
                {answer.text}
              </label>
            </Answer>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <button onClick={nextQuestion}>Next</button>
            <a href="/" style={{ color: "#637a80" }}>
              Quit the quizz
            </a>
          </div>
        </div>
      )
    } else {
      return
    }
  }
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sideleft>
          <Logo
            onClick={() => {
              navigate(`/${page}`)
              retakeTest()
            }}
          >
            {page === "JavaScript" ? (
              <img src={Js} alt="quizz logo" />
            ) : page === "Php" ? (
              <img src={Php} alt="quizz logo" />
            ) : page === "Python" ? (
              <img src={Python} alt="quizz logo" />
            ) : null}
          </Logo>
          {showResults ? (
            <Content>
              <h4> Congratulations! You completed the test </h4>
            </Content>
          ) : (
            <>
              <Content>
                <h5>
                  Question {questionIndex + 1} of {questions.length}
                </h5>
                {questions.length != 0 ? (
                  <h4>{questions[questionIndex].question}</h4>
                ) : null}
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
