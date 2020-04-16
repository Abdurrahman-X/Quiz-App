import styled, {
  css
} from "styled-components"

export const Wrapper = styled.div `
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
`
export const Sideleft = styled.div `
  grid-column-start: span 6;
  background-color: #000;
  padding: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h4 {
    font-size: 4.5rem;
    text-transform: capitalize;
    margin: 0px;
    font-family: muli, sans-serif;
  }
`

export const Choose = styled.div `
  padding: 40px;
  text-align: center;
  h3 {
    color: #000;
    display: inline-block;
    background-color: #fff;
    padding: 5px 25px;
    text-transform: capitalize;
    border-radius: 4px;
  }
`
export const Sideright = styled.div `
  grid-column-start: span 6;
  color: #000;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  button {
    cursor: pointer;
    width: 100px;
    padding: 0.5rem 0;
    margin-top : 1rem;
    background: #eee;
    border: 2px solid #9DBFF6;
  }
`
export const CardStyle = styled.div `
  background: #fff;
  padding: 10px 30px;
  margin: 15px 0;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 0px 10px -5px #7b7b7b;
  ${props =>
    props.true &&
    css`
      background: #252525;
      color: #fff;
    `}
  h1 {
    margin: 0px;
  }
  h5 {
    margin: 10px;
    font-size: 14px;
  }
  
`