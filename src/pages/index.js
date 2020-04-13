import React from "react"
import GlobaleStyle from "../components/Style/GlobaleStyle"
import Cards from '../components/Cards';
import {
  Wrapper,
  Sideleft,
  Choose,
  Sideright,
} from "../components/Style/HomeStyle"

const IndexPage = () => (
  <>
    <GlobaleStyle />
    <Wrapper>
      <Sideleft>
        <h4>Welcome to the programming test!</h4>
        <Choose>
          <h3>choose a language &#8594;</h3>
        </Choose>
      </Sideleft>
      <Sideright>
       <Cards />
      </Sideright>
    </Wrapper>
  </>
)
export default IndexPage
