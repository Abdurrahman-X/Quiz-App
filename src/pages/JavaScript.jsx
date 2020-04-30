import React, { useState, useEffect } from "react"
import QuizzPage from "./QuizzPage.jsx"

const JavaScript = () => {
  useEffect(() => {
    import("../static/Js.json").then(module => {
      setQst(module.default)
    })
  }, [])
  const [qst, setQst] = useState([])

  return <QuizzPage pathname="javascript" questions={qst} />
}

export default JavaScript
