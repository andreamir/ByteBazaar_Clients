import { styled } from 'styled-components'

const Scrollbar = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: inherit;
  height: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${props => props?.$gap || '20px'}; 
  padding: 20px;
  scroll-behavior: smooth;
`

export default Scrollbar