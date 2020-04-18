import React from "react"
import { navigate } from "gatsby"
import { Score, Btns } from "../components/Style/ResultStyle"
const Results = ({
  correctAnswers,
  wrongAnswers,
  numberOfQuestions,
  retakeTest,
}) => {
  return (
    <>
      <p>
        {correctAnswers} Correct answers and {wrongAnswers} Wrong answers
      </p>
      <h4>Your score is</h4>
      <Score>
        {" "}
        {correctAnswers}/{numberOfQuestions}{" "}
      </Score>
      <Btns>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={retakeTest}>Retake the test</button>
      </Btns>
    </>
  )
}
export default Results
