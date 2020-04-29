import React from "react"
import QuizzPage from "./QuizzPage.jsx"
import questionsData from "../data/Questions.json"
const Python = () => {
  return (
    <QuizzPage
      pathname="python"
      questions={questionsData.questions["python"]}
    />
  )
}

export default Python
