import React from "react"
import QuizzPage from "./QuizzPage.jsx"
import questionsData from "../data/Questions.json"
const JavaScript = () => {
  return (
    <QuizzPage
      pathname="javascript"
      questions={questionsData.questions["javascript"]}
    />
  )
}

export default JavaScript
