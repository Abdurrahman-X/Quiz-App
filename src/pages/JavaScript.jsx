import React from "react"
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
  return (
    <>
      <GlobaleStyle />
      <Wrapper>
        <Sideleft>
          <img src={Js} alt="js logo" />
          <Choose>
            <h3>How can you get the type of arguments passed to a function?</h3>
          </Choose>
        </Sideleft>

        <Sideright>
          <Container>
            <Answer>
              <div></div>Using typeof operator
            </Answer>
            <Answer>
              {" "}
              <div></div>Using getType function
            </Answer>
            <Answer>
              <div></div>Both of the above
            </Answer>
            <Answer>
              <div></div>None of the above
            </Answer>
            <button>
              <div></div>Next
            </button>
          </Container>
        </Sideright>
      </Wrapper>
    </>
  )
}

export default JavaScriptQuizz
