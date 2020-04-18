import {
  createGlobalStyle
} from "styled-components"

export default createGlobalStyle `
  body{
      padding: 0;
      margin: 0;
  }
  img {
      width: 100px;
    }
  
    button{
      border: 1px solid #a8a7a7;
      min-width: 200px;
      padding: 10px;
      cursor: pointer;
      margin-top:10px;
    }
    button:hover{
      
      border: 1px solid #A4C5FC;
    }
    
  `