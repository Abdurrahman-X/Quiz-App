import styled from "styled-components"

export const Wrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
`
export const Logo = styled.div `
  display: inline-block;
  cursor: pointer;
  img {
    width: 110px;
    max-height : 60px;
  }
  h5 {
    font-size: 22px;
    margin: 15px 5px;
  }
`
export const Score = styled.div `
  padding: 20px;
  border: 2px solid green;
  border-radius: 50%;
  display: inline-block;
`
export const Content = styled.div `
  margin: 25% 0;
  @media (max-width: 810px) {
    margin: 0;
  }
`
export const Sideleft = styled.div `
  grid-column-start: span 6;
  background-color: #000;
  padding: 20px;
  color: #fff;
  h4 {
    font-size: 2.5rem;
    text-transform: capitalize;
    font-family: muli, sans-serif;
    margin: 15px 0;
  }
  .question {
    margin-top: 10rem;
  }
  @media (max-width: 810px) {
    grid-column-start: span 12;
  }
  @media (max-width: 455px) {
    h4 {
      font-size: 1.5rem;
    }
  }
`

export const Sideright = styled.div `
  grid-column-start: span 6;
  color: #000;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  @media (max-width: 810px) {
    grid-column-start: span 12;
  }
  @media (max-width: 455px) {
    padding: 10px;
  }
`

export const Btns = styled.div ``

export const Container = styled.div `
  grid-template-columns: repeat(1, 1fr);
  display: grid;
  width: 100%;
`
export const Answer = styled.div `
  background: #5d5d9f;
  display: flex;
  align-items: center;
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  margin-top: 1rem;
`
export const Error = styled.div `
  font-size: "20px";
  text-align: center;
  font-family: Ubuntu;
color: white;
 background-color: #d04d4d;
  width: 30%;
  margin: 0 auto;
  padding: 5px;
`