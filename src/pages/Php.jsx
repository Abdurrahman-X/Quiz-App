import React, { useState } from "react"
import { navigate } from "gatsby"
import GlobalStyle from "../components/Style/GlobalStyle"
import Js from "../images/JavaScript.png"
import {
  Wrapper,
  Sideleft,
  Sideright,
  Logo,
  Score,
} from "../components/Style/ResultStyle"
import { Answer, Container } from "../components/Style/QuizzStyle"

const PhpQuizz = () => {
  const questions = [
    {
      id: 1,
      question: "Which statement about Hooks is not true?",
      answer_a:
        "Hooks are 100% backwards-compatible and can be used side by side with classes",
      answer_b: "Hooks are still in beta and not available yet",
      answer_c:
        "Hooks are completely opt-in, there's no need to rewrite existing code",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 2,
      question: "Which one is not a Hook?",
      answer_a: "useState()",
      answer_b: "useConst()",
      answer_c: "useReducer()",
      answer_d: "All of the above",
      correct_answer: "b",
    },
    {
      id: 3,
      question: "What Hook should be used for data fetching?",
      answer_a: "useDataFetching()",
      answer_b: "useApi()",
      answer_c: "useEffect()",
      answer_d: "useRequest()",
      correct_answer: "c",
    },
  ]
  const [currentQuestions, setCurrentQuestions] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState("")
  const [answers, setAnswer] = useState([])
  const [error, setError]= useState('');
  const question = questions[currentQuestions]


  const handlerClick = e => {
    setCurrentAnswer(e.target.value);
    setError('')
  }
const handlerError = () =>{
  if(!error){
    return ;
  }
return <div>{error}</div>;
}
  const handlerNext = () => {
    const answer = { questionId: question.id, answer: currentAnswer }
    if(!currentAnswer){
      setError('Please select a answer');
      return;
    }
    answers.push(answer)
    setAnswer(answers)
    setCurrentAnswer("")
    if(currentQuestions + 1 < questions.length){
      setCurrentQuestions(currentQuestions + 1);
    }
    console.log("u clicked me");
    
  };
  console.log(answers);
  console.log(currentAnswer)
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Sideleft>
          <Logo onClick={() => navigate(`/`)}>
            <img src={Js} alt="Js logo" />
            <h5>JavaScript</h5>
          </Logo>
          <Score>Questions {currentQuestions + 1} of {questions.length}</Score>
          <h4>{question.question}</h4>
        </Sideleft>
        <Sideright>
          <Container>
          {handlerError()}
            <Answer>
              <input
                type="radio"
                value="a"
                checked={currentAnswer === "a"}
                onChange={handlerClick}
              />
              <label>{question.answer_a}</label>
            </Answer>
            <Answer>
              <input
                type="radio"
                value="b"
                checked={currentAnswer === "b"}
                onChange={handlerClick}
              />
              <label>{question.answer_b}</label>
            </Answer>
            <Answer>
              <input
                type="radio"
                value="c"
                checked={currentAnswer === "c"}
                onChange={handlerClick}
              />
              <label>{question.answer_c}</label>
            </Answer>
            <Answer>
              <input
                type="radio"
                value="d"
                checked={currentAnswer === "d"}
                onChange={handlerClick}
              />
              <label>{question.answer_d}</label>
            </Answer>
            
            <button onClick={handlerNext}>Next</button>
          </Container>
        </Sideright>
      </Wrapper>
    </>
  )
}
export default PhpQuizz
