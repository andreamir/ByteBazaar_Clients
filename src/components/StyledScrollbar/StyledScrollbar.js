import { styled } from 'styled-components'

const Scrollbar = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  background-color: #ECECEC;
  // border: #AAABB8 solid;
  // border-width: 1px 0;
  height: 450px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${props => props?.$gap || '20px'}; 
  padding: 20px;
  scroll-behavior: smooth;
  z-index: 0;
  position: absolute;
`

export default Scrollbar