import React from "react"
import { navigate } from "gatsby"
import { Score, Btns } from "../components/Style/ResultStyle"
const Results = ({ correctAnswers, wrongAnswers, Questions, restart }) => {
  return (
    <>
      <p>
        Correct answers {correctAnswers} and Wrong answers {wrongAnswers}
      </p>
      <h4>Your score is</h4>
      <Score>
        {" "}
        {correctAnswers}/{Questions}{" "}
      </Score>
      <Btns>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={restart}>Restart Quizz</button>
      </Btns>
    </>
  )
}
export default Results
