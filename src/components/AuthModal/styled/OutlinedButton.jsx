import { styled } from 'styled-components';

const Button = styled.button.attrs((props) => ({
  type: 'button',
}))`
  background-color: #fff;
  border: 1px solid #1a1a1a;
  color: #1a1a1a;
  display: block;
  width: 100%;
  border-radius: 200px;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.8s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.78, 0.13, 0.15, 0.86);
  white-space: nowrap;
  appearance: button;
  text-transform: none;
  font-family: inherit;
  margin: 0;
  letter-spacing: -0.3px;

  &:hover {
    background-color: #000;
    color: #fff;
  }

  &:not(.no-scale):hover {
    transform: scale(1.05);
    transform-origin: center;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 11px 24px;
  }
`;

function StyledButton({ children, handleDismiss, toggleDifferentModal }) {
  return (
    <Button
      onClick={() => {
        handleDismiss();
        toggleDifferentModal();
      }}
    >
      {children}
    </Button>
  );
}

export default StyledButton;
