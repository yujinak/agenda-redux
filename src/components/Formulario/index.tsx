import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Titulo } from '../../styles'
import { Campo, Form, BotaoAdicionar } from './styles'
import { adicionar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()

  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [descricao, setDescricao] = useState('')

  const adicionarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      adicionar({
        nome,
        telefone,
        email,
        endereco,
        descricao
      })
    )
  }

  return (
    <Form onSubmit={adicionarContato}>
      <Titulo>Formulário</Titulo>
      <p>
        Para adicionar novos contatos, preencha os campos abaixo e clique no
        botão.
      </p>
      <Campo
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="Nome Completo"
      />
      <Campo
        value={telefone}
        onChange={(evento) => setTelefone(evento.target.value)}
        type="tel"
        placeholder="Telefone"
      />
      <Campo
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="Email"
      />
      <Campo
        value={endereco}
        onChange={(evento) => setEndereco(evento.target.value)}
        type="text"
        placeholder="Endereço"
      />
      <Campo
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        type="text"
        placeholder="Descrição"
      />

      <BotaoAdicionar type="submit">
        <span className="material-symbols-outlined">person_add</span> Adicionar
      </BotaoAdicionar>
    </Form>
  )
}

export default Formulario
