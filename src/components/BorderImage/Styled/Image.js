import { styled } from 'styled-components'

const Image = styled.div`
  background: url(https://assets.nintendo.eu/image/upload/c_scale,f_auto,q_auto/NAL/Homepage/Homepage_Consoles_Banner_2.png);
  width: 100%;
  height: 100%;
  background-size: 80%;
  overflow: hidden;
  background-clip: border-box;
  // -moz-border-radius: 10px 10px 0 0;
  position: absolute;
  background-size: contain;
  z-index: 0;
  border-radius: inherit;
  // transition-duration: .8s;
  //   transition-property: all;
  //   transition-timing-function: cubic-bezier(.78,.13,.15,.86);
  &: hover {
    transform: background-size(90%);
    transform-origin: center center 0;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

export default Image