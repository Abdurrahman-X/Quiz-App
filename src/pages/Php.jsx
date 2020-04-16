import React, { useState } from "react"
import GlobaleStyle from "../components/Style/GlobaleStyle"
import Php from "../images/php.png"
import {
  Wrapper,
  Sideleft,
  Choose,
  Sideright,
} from "../components/Style/HomeStyle"
import { Answer, Container } from "../components/Style/QuizzStyle"
const PhpQuizz = () => {
  const [questions] = useState([
    {
      question: "How can you get the type of arguments passed to a function?",
      answers: {
        a: "Using typeof operator",
        b: "Using getType function",
        c: "Both of the above",
        d: "None of the above",
      },
      answer: "a",
    },
  ])
  return (
    <>
      <GlobaleStyle />
      <Wrapper>
        <Sideleft>
          <img src={Php} alt="php logo" />
          <Choose>
            <h3>{questions[0].question}</h3>
          </Choose>
        </Sideleft>

        <Sideright>
          <Container>
            <Answer>
              <input type="radio" name="" value="" />
              {questions[0].answers["a"]}
            </Answer>
            <Answer>
              {" "}
              <input type="radio" name="" value="" />
              {questions[0].answers["b"]}
            </Answer>
            <Answer>
              <input type="radio" name="" value="" />
              {questions[0].answers["c"]}
            </Answer>
            <Answer>
              <input type="radio" name="" value="" />
              {questions[0].answers["d"]}
            </Answer>
            <button>Next</button>
          </Container>
        </Sideright>
      </Wrapper>
    </>
  )
}

export default PhpQuizz
