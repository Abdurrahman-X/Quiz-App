import React from "react"
import QuizzPage from "./QuizzPage.jsx"
import questionsData from "../components/Questions.json"

const Php = () => {
  return <QuizzPage pathname="php" questions={questionsData.questions["php"]} />
}

export default Php
