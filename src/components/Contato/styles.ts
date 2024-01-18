import styled from 'styled-components'
import { Botao } from '../../styles'

export const Caixa = styled.div`
  display: block;
  position: relative;
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`

export const CaixaDados = styled.div`
  color: grey;
  text-align: start;
`

export const Nome = styled.input`
  margin-top: 8px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  background-color: transparent;
  border: none;
`

export const Email = styled.input`
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: grey;
`
export const Telefone = styled.input`
  margin-bottom: 24px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: grey;
`

export const EnderecoEDescricao = styled.textarea`
  font-size: 12px;
  background-color: transparent;
  line-height: 12px;
  border: none;
  resize: none;
  width: 100%;
  color: grey;
`

export const Foto = styled.img`
  margin: 12px auto 0;
  border-radius: 50%;
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: #dda3a3;
  position: absolute;
  top: 0;
  right: 12px;
  transition: 0.5s;

  &:hover {
    background-color: #dd6262;
  }
`
export const BotaoEditarConfirmar = styled(Botao)`
  background-color: #dadead;
  position: absolute;
  top: 54px;
  right: 12px;
  transition: 0.5s;

  &:hover {
    background-color: #d5de74;
  }
`
