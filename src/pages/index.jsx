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
        <div
          style={{
            alignSelf: "flex-end",
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
          Made by{" "}
          <a href="https://github.com/LaasriNadia" target="_blank">
            Nadia
          </a>{" "}
          &{" "}
          <a href="https://github.com/ismail-elmahi" target="_blank">
            Ismail
          </a>{" "}
        </div>
      </Sideright>
    </Wrapper>
  </>
)

export default IndexPage
