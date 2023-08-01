// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
// Components
import App from './App.tsx'
// Styles
import { GlobalStyle } from './assets/styles/globalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
