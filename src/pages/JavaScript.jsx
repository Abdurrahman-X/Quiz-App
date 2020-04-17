import React, { useState } from "react"
import GlobaleStyle from "../components/Style/GlobaleStyle"
import Js from "../images/javascript.png"
import {
  Wrapper,
  Sideleft,
  Choose,
  Sideright,
} from "../components/Style/HomeStyle"
import { Answer, Container } from "../components/Style/QuizzStyle"
const JavaScriptQuizz = () => {
  const [questions] = useState([
    {
      question: "How can you get the type of arguments passed to a function?",
      answers: [
        "Using typeof operator",
        "Using getType function",
        "Both of the above",
        "None of the above",
      ],
      answer: 0,
    },
  ])

  return (
    <>
      <GlobaleStyle />
      <Wrapper>
        <Sideleft>
          <img src={Js} alt="js logo" />
          <Choose>
            <h3>{questions[0].question}</h3>
          </Choose>
        </Sideleft>

        <Sideright>
          <Container>
            {questions[0].answers.map((answer, i) => (
              <Answer key={i}>
                <input type="radio" name={answer} value={answer} />
                <label htmlFor={answer}> {answer}</label>
              </Answer>
            ))}
            <button>Next</button>
          </Container>
        </Sideright>
      </Wrapper>
    </>
  )
}

export default JavaScriptQuizz
