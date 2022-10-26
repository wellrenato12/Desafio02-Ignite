import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContextProvider } from './contexts/CoffeeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  )
}
