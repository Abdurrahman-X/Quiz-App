import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
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
      margin:10px;
      border-radius:5px
    }
    button:hover{
      border: 1px solid #5d5d9f;
    }
    button:focus{
      outline: none;
    }
    a {
      color:#00A0C6; 
     text-decoration:none; 
     cursor:pointer; 
    }
  `
