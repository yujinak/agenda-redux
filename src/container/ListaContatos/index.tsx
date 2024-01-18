import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { RootReducer } from '../../store'
import { GridLista, TituloApp } from './styles'

const ListaContatos = () => {
  const itens = useSelector((state: RootReducer) => state.contatos.contatos)

  return (
    <>
      <TituloApp>Agenda Redux</TituloApp>
      <GridLista>
        {itens.map((contato, index) => (
          <li key={index}>
            <Contato
              id={contato.id}
              nome={contato.nome}
              telefone={contato.telefone}
              email={contato.email}
              descricao={contato.descricao}
              endereco={contato.endereco}
            />
          </li>
        ))}
      </GridLista>
    </>
  )
}

export default ListaContatos
