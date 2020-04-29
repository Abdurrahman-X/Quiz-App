import React from "react"
import QuizzPage from "./QuizzPage.jsx"
import questionsData from "../data/Questions.json"

const Php = () => {
  return <QuizzPage pathname="php" questions={questionsData.questions["php"]} />
}

export default Php
