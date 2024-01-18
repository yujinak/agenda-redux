import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    list-style: none;
 }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.3fr;'

`

export const Principal = styled.div`
  height: 100%;
  padding-left: 32px;
  background-color: #f3f3f3;
`

export const Secundario = styled.div`
  height: 100%;
  padding: 32px 32px 0 0;
  background-color: #f3f3f3;
`

export const Botao = styled.button`
  margin-top: 12px;
  margin-left: 8px;
  padding: 8px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
`

export const Titulo = styled.h2`
  margin-bottom: 12px;
`

export default EstiloGlobal
