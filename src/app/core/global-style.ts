import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter';
  }

  a {
    color: inherit;
  }

  button {
    background: none;
    border: none;
  }

  :root {
    font-size: 10px;
  }

  ::-webkit-scrollbar {
    width: .5rem;
  }

  ::-webkit-scrollbar-thumb {
    padding-left: 1rem;
    border-radius: 1rem;
    background: ${props => props.theme.colors.border};
  }
`