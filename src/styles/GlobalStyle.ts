import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: ${({ theme }) => theme.font.family};
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export default GlobalStyle