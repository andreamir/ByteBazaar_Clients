import { styled } from 'styled-components'

const InfoContainer = styled.div`
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 16px;
  padding: 24px 16px;
  & input {
    border-radius: 24px;
    background: #f9f9f9;
    border: 1px solid #f2f2f2;
    letter-spacing: -.3px;
    padding: 12px;
  }
  & .save, .cancel {
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
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    padding: 4.5px 14px;
    margin-top: 24px;
    margin-right: 16px;
  }
  & .save {
    background-color: #1a1a1a;
    border-color: #1a1a1a;
    color: #fff;
  }
  & .cancel {
    background-color: #fff;
    border: 1px solid #1a1a1a;
    color: #1a1a1a;
  }
`

export default InfoContainer