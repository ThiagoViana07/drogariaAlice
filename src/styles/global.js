import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import background from '../assets/images/background.svg'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; 
  }

  body{
    background: #8B0000 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  button{
    cursor: pointer;
  }
  
`

console.log("Aqui")