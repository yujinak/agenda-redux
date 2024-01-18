import styled from 'styled-components'
import { Botao } from '../../styles'

export const Form = styled.form`
  border-radius: 24px;
  padding: 32px;
  color: white;
  position: relative;

  margin: 12px;
  background-color: #25a19d;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

  p {
    margin-bottom: 20px;
  }
`

export const BotaoAdicionar = styled(Botao)`
  position: absolute;
  bottom: 24px;
  right: 16px;
  background-color: #1c706d;
  transition: 0.5s;

  &:hover {
    background-color: #15514f;
  }
`
export const Campo = styled.input`
  display: block;
  width: 70%;
  padding: 8px;
  margin: 12px 0 8px;

  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  line-height: 18px;
  font-weight: bold;
  color: #fff;
`
