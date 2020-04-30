import React, { useState, useEffect } from "react"
import QuizzPage from "./QuizzPage.jsx"
const Python = () => {
  useEffect(() => {
    import("../static/python.json").then(module => {
      setPythonQst(module.default)
    })
  }, [])
  const [pythonQst, setPythonQst] = useState([])
  return <QuizzPage pathname="python" questions={pythonQst} />
}

export default Python
