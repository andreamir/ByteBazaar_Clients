import { styled } from 'styled-components'

const DataSection = styled.div`
  display: flex;
  & .data {
    display: flex;
    flex-direction: column;
    width: 50%;
    & .key {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
    }
    & .value {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
  }
`

export default DataSection