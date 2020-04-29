import React from "react"
import GlobalStyle from "../components/Style/GlobalStyle"

const NotFoundPage = () => (
  <>
    <GlobalStyle />
    <div
      style={{
        background: "#000",
        color: "#fff",
        width: " 100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Sorry! Page Not Found
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Click here to see the home page</p>
        <a href="/">Home</a>
      </div>
    </div>
  </>
)

export default NotFoundPage
