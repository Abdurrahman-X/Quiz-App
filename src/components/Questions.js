import React from "react"

const Questions = ({currentQuestions,allQuestions,question}) => {
  return (
    <div className="question">
      <h5>Questions {currentQuestions + 1} of {allQuestions.length}</h5>
      <h4>{question.question}</h4>
    </div>
  )
}

export default Questions
