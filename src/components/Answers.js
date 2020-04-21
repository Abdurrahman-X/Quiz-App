import React from "react"
import { Answer } from "../components/Style/QuizzStyle"
const Answers = ({ currentAnswer, handlerClick, handlerNext, question }) => {
  return (
    <div>
      <Answer>
        <input
          type="radio"
          value="a"
          checked={currentAnswer === "a"}
          onChange={handlerClick}
        />
        <label>{question.answer_a}</label>
      </Answer>
      <Answer>
        <input
          type="radio"
          value="b"
          checked={currentAnswer === "b"}
          onChange={handlerClick}
        />
        <label>{question.answer_b}</label>
      </Answer>
      <Answer>
        <input
          type="radio"
          value="c"
          checked={currentAnswer === "c"}
          onChange={handlerClick}
        />
        <label>{question.answer_c}</label>
      </Answer>
      <Answer>
        <input
          type="radio"
          value="d"
          checked={currentAnswer === "d"}
          onChange={handlerClick}
        />
        <label>{question.answer_d}</label>
      </Answer>
      <div style={{textAlign:'center'}}>
      <button onClick={handlerNext}>Next</button>
      </div>
      
    </div>
  )
}

export default Answers
