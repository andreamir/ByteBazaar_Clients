import {styled} from 'styled-components'

const TrackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props?.$left && 'left: 0' || 'right: 0'};
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 0 4px;
  font-size: 30px;
  background-color: #AAABB8;
  color: #ECECEC;
  cursor: pointer;
  visibility: ${props => props?.$hide && 'hidden' || 'visible'};
  z-index: 1;
  position: absolute;
  &:hover {
    background-color: #ECECEC;
    color: inherit;
  }
`

export default TrackButton