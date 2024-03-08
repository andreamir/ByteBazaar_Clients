import { styled } from 'styled-components'

const DataSection = styled.div`
  display: flex;
  & .data {
    display: flex;
    flex-direction: column;
    width: 100%;
    & .key {
      font-size: 14px;
      line-height: 20px;
      font-weight: 500;
    }
    & .key:not(:first-child) {
      margin-top: 16px;
    }
    & .value {
      font-size: 16px;
      line-height: 20px;
      font-weight: 400;
    }
    & > input {
      border-radius: 24px;
      background: #f9f9f9;
      border: 1px solid #f2f2f2;
      letter-spacing: -.3px;
      padding: 12px;
      margin-right: 16px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
  }
`

export default DataSection