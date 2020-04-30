import React, { useState, useEffect } from "react"
import QuizzPage from "./QuizzPage.jsx"

const Php = () => {
  useEffect(() => {
    import("../static/php.json").then(module => {
      setPhpQst(module.default)
    })
  }, [])
  const [phpQst, setPhpQst] = useState([])

  return <QuizzPage pathname="php" questions={phpQst} />
}

export default Php
