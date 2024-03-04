import { styled } from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 400px;
  width: 300px;
  transition: ease .5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 24px;
  }
`

export default Overlay