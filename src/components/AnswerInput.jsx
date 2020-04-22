import React from "react"
const AnswerInput = ({ answer, onChange }) => {
  return (
    <input type="radio" name="quizz" value={answer.value} onChange={onChange} />
  )
}

export default AnswerInput
