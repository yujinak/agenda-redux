import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatosState = {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: [
    {
      id: 1,
      nome: 'Mauricio Soares',
      email: 'mauri@soares.com.br',
      telefone: '(11)1111111',
      descricao: 'Chefe da empresa anterior',
      endereco: 'Rua Camões, 1291 - Sobral'
    },
    {
      id: 2,
      nome: 'Joana Bernardete',
      email: 'jo@bebe.com',
      telefone: '(22)2222222',
      descricao: 'Presidente da Empresa X',
      endereco: 'Avenida Mario Camargo, 420 - Jandirá'
    },
    {
      id: 3,
      nome: 'Rene Jordin',
      email: 'rene@rejo.com',
      telefone: '(33)3333333',
      descricao: 'Auxiliar do condomínio',
      endereco: 'rua XX de março, 330 - Maracá'
    },
    {
      id: 4,
      nome: 'José Pereira',
      email: 'asdasd@aaaa.com',
      telefone: '(44)4444444',
      descricao: 'Vizinho do outro lado da rua',
      endereco: 'Avenida ABC, 1241 - Caxias'
    },
    {
      id: 5,
      nome: 'Rogério Sarau',
      email: 'rs@ssss.com',
      telefone: '(55)555555',
      descricao: 'Cultiva plantas ornamentais',
      endereco: 'R. Aracajuana 999 - Cajuaba'
    },
    {
      id: 6,
      nome: 'Geni',
      email: 'geni@geni.com',
      telefone: '(66)66666666',
      descricao: 'Barista aposentada',
      endereco: 'Travessa Rodolfo Abner dos Santos, 1029 - Irilândia  '
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      // Verifica se o campo Nome foi preenchido
      if (!action.payload.nome) {
        alert(
          "Campo 'nome' é obrigatório. Por favor, preencha com o nome do contato."
        )
      } else {
        // Verifica se contato existe
        const contatoExistente = state.contatos.find(
          (contato) => contato.nome === action.payload.nome
        )

        // Adiciona se é novo contato, ou alerta caso contato já exista
        if (contatoExistente) {
          alert('Esse contato já se encontra cadastrado!')
        } else {
          // Verifica qual o último contato
          const ultimoContato = state.contatos[state.contatos.length - 1]

          // Se ultimoContato (ou algum contato) existe, adiciona propriedade id ao contato preenchido
          const novoContato = {
            id: ultimoContato ? ultimoContato.id + 1 : 1,
            ...action.payload
          }
          // Adiciona novoContato aos contatos
          state.contatos.push(novoContato)
        }
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      // Filtra os contatos que não possuem o mesmo nome que o clicado
      state.contatos = [
        ...state.contatos.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      // Procura o index do contato clicado
      const indexDoContato = state.contatos.findIndex(
        (contato) => contato.id === action.payload.id
      )

      // Se o index existe, edita o Contato com as informações reescritas
      if (indexDoContato >= 0) state.contatos[indexDoContato] = action.payload
    }
  }
})

export const { adicionar, remover, editar } = contatosSlice.actions

export default contatosSlice.reducer
