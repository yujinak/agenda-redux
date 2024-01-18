import { useDispatch } from 'react-redux'
import { useState } from 'react'

import ClasseContato from '../../models/Contato'
import {
  BotaoEditarConfirmar,
  BotaoRemoverCancelar,
  Caixa,
  CaixaDados,
  Email,
  EnderecoEDescricao,
  Foto,
  Nome,
  Telefone
} from './styles'
import { editar, remover } from '../../store/reducers/contatos'

type Props = ClasseContato

const Contato = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  descricao: descricaoOriginal,
  endereco: enderecoOriginal
}: Props) => {
  const dispatch = useDispatch()

  const [editando, setEditando] = useState(false)

  // Elementos editáveis
  const [nome, setNome] = useState(nomeOriginal)
  const [email, setEmail] = useState(emailOriginal)
  const [telefone, setTelefone] = useState(telefoneOriginal)
  const [descricao, setDescricao] = useState(descricaoOriginal)
  const [endereco, setEndereco] = useState(enderecoOriginal)

  // Funções
  function cancelarEdicao() {
    setEditando(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
    setDescricao(descricaoOriginal)
    setEndereco(enderecoOriginal)
  }

  return (
    <Caixa>
      {editando ? (
        <>
          <BotaoRemoverCancelar onClick={() => cancelarEdicao()}>
            <span className="material-symbols-outlined">close</span> Cancelar
          </BotaoRemoverCancelar>
          <BotaoEditarConfirmar
            onClick={() => {
              dispatch(
                editar({ id, nome, email, telefone, descricao, endereco })
              )
              setEditando(false)
            }}
          >
            <span className="material-symbols-outlined">check</span> Comfirmar
          </BotaoEditarConfirmar>
        </>
      ) : (
        <>
          <BotaoRemoverCancelar onClick={() => dispatch(remover(id))}>
            <span className="material-symbols-outlined">delete</span> Deletar
          </BotaoRemoverCancelar>
          <BotaoEditarConfirmar onClick={() => setEditando(true)}>
            <span className="material-symbols-outlined">edit_note</span> Editar
          </BotaoEditarConfirmar>
        </>
      )}

      <Foto src="https://via.placeholder.com/150x150" alt="Foto de perfil" />

      <CaixaDados>
        <Nome
          disabled={!editando}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Email
          disabled={!editando}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Telefone
          disabled={!editando}
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <EnderecoEDescricao
          disabled={!editando}
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <EnderecoEDescricao
          disabled={!editando}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        {/* <Nome disabled={!editando}>{nome}</Nome>
        <EmailETelefone disabled={!editando}>{email}</EmailETelefone>
        <EmailETelefone disabled={!editando}>{telefone}</EmailETelefone>
        <EnderecoEDescricao disabled={!editando}>
          Endereço: {endereco}
        </EnderecoEDescricao>
        <EnderecoEDescricao disabled={!editando}>
          Descrição: {descricao}
        </EnderecoEDescricao> */}
      </CaixaDados>
    </Caixa>
  )
}

export default Contato
