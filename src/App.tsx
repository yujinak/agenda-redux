// Importações externas - APIs, bibliotecas, etc.
import { Provider } from 'react-redux'

// Importações internas - elementos do projeto
import ListaContatos from './container/ListaContatos'
import EstiloGlobal, { Principal, Secundario, Container } from './styles'
import MenuLateral from './container/MenuLateral'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Principal>
          <ListaContatos />
        </Principal>
        <Secundario>
          <MenuLateral />
        </Secundario>
      </Container>
    </Provider>
  )
}

export default App
