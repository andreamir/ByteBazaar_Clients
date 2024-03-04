import { styled } from 'styled-components'

const AddToCart = styled.button`
  background-color: #e20a03;
  border: none;
  border-radius: 50%;
  height: 48px;
  width: 48px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease 1s;
  &:hover {
    background-color: #b50802;
  }
  &:hover {
    transform: scale(1.05);
    transform-origin: center center 0;
  }
`

export default AddToCart