import React from "react"
import GlobalStyle from "../components/Style/GlobalStyle"
import Cards from "../components/Cards.jsx"
import {
  Wrapper,
  Sideleft,
  Choose,
  Sideright,
} from "../components/Style/HomeStyle"

const IndexPage = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Sideleft>
        <h4> Welcome to the programming test! </h4>
        <Choose>
          <h3> choose a language &#8594;</h3>
        </Choose>
      </Sideleft>

      <Sideright>
        <Cards />
      </Sideright>
    </Wrapper>
  </>
)

export default IndexPage
