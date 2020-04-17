import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
`
export const Logo = styled.div`
  display: flex;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
  }
  h5 {
    font-size: 22px;
    margin: 15px 5px;
  }
`
export const Score = styled.div`
  padding: 20px;
  border: 2px solid green;
  border-radius: 50%;
`

export const Sideleft = styled.div`
  grid-column-start: span 6;
  background-color: #000;
  padding: 30px;
  color: #fff;
  h4 {
    font-size: 2.5rem;
    text-transform: capitalize;
    margin: 35vh 0px;
    font-family: muli, sans-serif;
  }
  @media (max-width: 810px) {
    grid-column-start: span 12;
  }
  @media (max-width: 455px) {
    h4 {
      font-size: 2rem;
    }
  }
`

export const Sideright = styled.div`
  grid-column-start: span 6;
  color: #000;
  background: #fbfbfb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 810px) {
    grid-column-start: span 12;
  }
  @media (max-width: 455px) {
    padding: 10px;
  }
`
