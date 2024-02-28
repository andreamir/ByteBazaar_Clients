import { styled } from 'styled-components';

const Basket = styled.img.attrs((props) => ({ src: props.src }))`
  height: 24px;
  width: auto;
`

export default Basket