import { styled } from 'styled-components';

const Thumbnail = styled.img.attrs((props) => ({ src: props.src }))`
  height: 180px;
  width: auto;
`

export default Thumbnail