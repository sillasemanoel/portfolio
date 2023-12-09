import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  img {
    user-select: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #8e8e8e;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 20px;
  }
`;
