import React from "react"
import GlobalStyle from "../components/Style/GlobalStyle"
import { Wrapper, Sideleft, Sideright } from "../components/Style/HomeStyle"
const  JavaScript = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sideleft>Hello from left</Sideleft>
        <Sideright>Hello from right</Sideright>
      </Wrapper>
    </>
  )
}
export default JavaScript