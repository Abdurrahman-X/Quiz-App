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
      setPage("Javascript")
    } else if (props.pathname === "php") {
      setPage("Php")
    } else if (props.pathname === "python") {
      setPage("Python")
    }
  }, [])

  const [questions] = useState([
    {
      question: "How can you get the type of arguments passed to a function?",
      answers: [
        { text: "Using typeof operator", value: "0" },
        { text: "Using getType function", value: "1" },
        { text: "Both of the above", value: "2" },
        { text: "None of the above", value: "3" },
      ],
      answer: 1,
    },
    {
      question: `Determine the result -String("Hello") === "Hello"`,
      answers: [
        { text: "true", value: "0" },
        { text: "false", value: "1" },
        { text: "Syntax Error", value: "2" },
        { text: "Reference Error", value: "3" },
      ],
      answer: 0,
    },
    {
      question: `JavaScript File Has An Extension Of`,
      answers: [
        { text: ".java", value: "0" },
        { text: ".js", value: "1" },
        { text: ".xml", value: "2" },
        { text: ".javascript", value: "3" },
      ],
      answer: 1,
    },
    {
      question: `A Function Associated With An object is Called`,
      answers: [
        { text: "function", value: "0" },
        { text: "method", value: "1" },
        { text: "link", value: "2" },
        { text: "none", value: "3" },
      ],
      answer: 1,
    },
  ])
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
      questions[questionIndex].answer == selectedAnswer
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
            {page === "Javascript" ? (
              <img src={Js} alt="quizz logo" />
            ) : page === "Php" ? (
              <img src={Php} alt="quizz logo" />
            ) : page === "Python" ? (
              <img src={Python} alt="quizz logo" />
            ) : null}

            <h5>{props.pathname}</h5>
          </Logo>
          {showResults ? (
            <h4> Congratulations! You completed the test </h4>
          ) : (
            <>
              <h5>
                Question {questionIndex + 1} of {questions.length}{" "}
              </h5>
              <h4>{questions[questionIndex].question}</h4>
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
