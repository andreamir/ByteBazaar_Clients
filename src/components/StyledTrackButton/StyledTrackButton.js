import {styled} from 'styled-components'

const TrackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props?.$left && 'left: 0' || 'right: 0'};
  // border: #AAABB8 1px solid;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 0 4px;
  font-size: 40px;
  background-color: #AAABB8;
  color: #ECECEC;
  cursor: pointer;
  // transition: ease .5s;
  visibility: ${props => props?.$hide && 'hidden' || 'visible'};
  z-index: 1;
  position: absolute;
  // visibility: hidden;
  &:hover {
    background-color: #ECECEC;
    color: inherit;
  }
`

export default TrackButton