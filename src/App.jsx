import { ThemeProvider } from "styled-components"
import GlobalStyles from "./components/styles/Global"
import { Container } from "./components/styles/Container.styled"
import Header from "./components/Header"
import content from "./content"
import Card from "./components/Card"

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  mobile: '768px',
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) =>

            (<Card key={index} items={item}/>))
          }
        </Container>
      </>
    </ThemeProvider>
  )
}

export default App