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

        <p
          style={{
            color: "white",
            bottom: 0,
            position: "absolute",
            right: 0,
            margin: "10px",
          }}
        >
          made by{" "}
          <a href="https://github.com/LaasriNadia" target="_blank">
            Nadia
          </a>{" "}
          &{" "}
          <a href="https://github.com/ismail-elmahi" target="_blank">
            Ismail
          </a>
        </p>
      </Sideleft>

      <Sideright>
        <Cards />
      </Sideright>
    </Wrapper>
  </>
)

export default IndexPage
