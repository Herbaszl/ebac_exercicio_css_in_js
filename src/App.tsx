import Header from './containers/Header'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import { ThemeProvider } from 'styled-components'
import themeD from './themes/themed'
function App() {
  return (
    <ThemeProvider theme={themeD}>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <div className="container">
          <ListaVagas />
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
