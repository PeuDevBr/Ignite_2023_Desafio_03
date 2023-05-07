import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostsProvider } from './context/PostsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostsProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}
