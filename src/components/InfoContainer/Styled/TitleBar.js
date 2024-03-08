import { styled } from 'styled-components'

const TitleBar = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  & .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin: 0;
  }
  & button {
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    padding: 1.5px 14px;
    align-self: center;
    border: 1px solid transparent;
    border-radius: 200px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    outline: none;
    overflow: hidden;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition-duration: .8s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.78,.13,.15,.86);
    white-space: nowrap;
  }
  & i {
    cursor: pointer;
  }
`

export default TitleBar