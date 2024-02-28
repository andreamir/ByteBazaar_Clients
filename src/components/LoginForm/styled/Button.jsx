import { styled } from 'styled-components';
import ButtonContent from './ButtonContent';
import ButtonText from './ButtonText';

const Button = styled.button`
  /* button */
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
  overflow: auto;
  overflow: visible;
  font-size: 100%;
  padding: 0;
  text-transform: none;
  appearance: button;

  align-self: center;
  border-image: none 100% 1 0 stretch;
  border-radius: 200px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  cursor: pointer;
  outline: medium currentcolor;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none currentcolor solid;
  transition: all 0.8s cubic-bezier(0.78, 0.13, 0.15, 0.86);
  white-space: nowrap;

  /* .cx-btn-md */
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  padding: 8.5px 15px;

  /* .cx-btn-block */
  display: block;
  width: 100%;

  /* // TODO: This should come in a prop or something configurable */
  /* .cx-btn-primary */
  background-color: #e20a03;
  border-color: #e20a03;
  color: #fff;

  &:disabled {
    border-color: #e6e6e6;
    cursor: default;
    background-color: #e6e6e6;
    color: #b3b3b3;
  }

  &:disabled:hover {
    background-color: #e6e6e6;
    color: #b3b3b3;
  }

  /* .cx-btn-primary */
  &:active {
    background-color: #e20a03;
    border-color: #e20a03;
    color: #fff;
  }

  &:focus-visible {
    outline: 1px dotted buttontext;
  }

  @media (min-width: 768px) {
    /* .cs-btn-md */
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 11px 24px;

    /* .cx-btn-primary */
    &:hover {
      background-color: #b50802;
    }

    &:not(.no-scale):hover {
      transform: scale(1.05);
      transform-origin: center center 0;
    }
  }
`;

function StyledButton({ children }) {
  return (
    <Button>
      <ButtonContent>
        <ButtonText>{children}</ButtonText>
      </ButtonContent>
    </Button>
  );
}

export default StyledButton;
