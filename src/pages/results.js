import React from "react"
import { navigate } from "gatsby"
import GlobalStyle from "../components/Style/GlobalStyle"
import Js from "../images/JavaScript.png"
import {
  Wrapper,
  Sideleft,
  Sideright,
  Logo,
  Score,
} from "../components/Style/ResultStyle"
const Results = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sideleft>
          <Logo onClick={() => navigate(`/`)}>
            <img src={Js} alt="Js logo" />
            <h5>JavaScript</h5>
          </Logo>
          <h4>You completed your test!</h4>
        </Sideleft>
        <Sideright>
          <h4>Your score is</h4>
          <Score>10/10</Score>
        </Sideright>
      </Wrapper>
    </>
  )
}
export default Results
