import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"
import { theme } from './Theme/Theme.ts'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Theme/globalStyle.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <App />
    </ThemeProvider>
    {/* </Provider> */}
  </React.StrictMode>
)
