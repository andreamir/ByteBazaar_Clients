import { styled } from 'styled-components'

const Card = styled.div`
  position: relative;
  height: 400px;
  width: 300px;
  font-size: 0px;
  background-image: url(${props => props.$bgimage});
  background-repeat: round;
`

export default Card
