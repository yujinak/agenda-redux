class Contato {
  id: number
  nome: string
  email: string
  telefone: string
  descricao: string
  endereco: string

  constructor(
    id: number,
    nome: string,
    email: string,
    telefone: string,
    descricao: string,
    endereco: string
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.descricao = descricao
    this.endereco = endereco
  }
}

export default Contato
