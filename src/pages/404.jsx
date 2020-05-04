import React from "react"
import GlobalStyle from "../components/Style/GlobalStyle"
import {Link } from "gatsby"
import {
  ErrorWrapper,
  ErrorPage
} from "../components/Style/HomeStyle"
const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <ErrorWrapper>
      Sorry! Page Not Found
      <ErrorPage>
        <p>Click here to see the home page</p>
        <Link to="/" style={{textAlign:"center"}}>Home</Link>
      </ErrorPage>
    </ErrorWrapper>
  </>
)

export default NotFoundPage
