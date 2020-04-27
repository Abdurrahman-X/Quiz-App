import React from "react"
const AnswerInput = ({ answer, onChange, selectedAnswer }) => {
  return (
    <input
      type="radio"
      name="quizz"
      checked={selectedAnswer === answer.value}
      value={answer.value}
      onChange={onChange}
    />
  )
}

export default AnswerInput
