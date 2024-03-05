/**
 * TODO RESEARCH.-
 * Research 'trancient props' in styled components
 * If we pass props that are not official html attributes to
 * a styled component, we get a long warning saying that an
 * 'unknown' prop is passing through the DOM.
 * What does this mean?
 * We can 'fix' this by prepending $ to the prop, making it
 * a 'transient prop'. Does this fix the problem or just
 * silence it?
 */

import { styled } from 'styled-components';

const COLORS = {
  submit: {
    background: '#e20a03',
    border: '#e20a03',
    color: '#fff',
    backgroundHover: '#b50802',
    colorHover: '#fff',
    activeBackground: '#e20a03',
    activeBorder: '#e20a03',
    activeColor: '#fff',
  },
  outline: {
    background: '#fff',
    border: '#1a1a1a',
    color: '#1a1a1a',
    backgroundHover: '#1a1a1a',
    colorHover: '#fff',
    activeBackground: 'fff',
    activeBorder: '#1a1a1a',
    activeColor: '#1a1a1a',
  },
};

const Button = styled.button.attrs((props) => ({
  type: props.type,
  $variant: props.$variant,
}))`
  cursor: pointer;
  border-radius: 200px;
  display: block;
  width: 100%;
  position: relative;
  white-space: nowrap;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  padding: 8.5px 15px;
  transition: all 0.8s cubic-bezier(0.78, 0.13, 0.15, 0.86);

  background-color:       ${(props) => COLORS[props.$variant].background};
  border: 1px solid       ${(props) => COLORS[props.$variant].border};
  color:                  ${(props) => COLORS[props.$variant].color};
  background-color:       ${(props) => COLORS[props.$variant].background};

  @media (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    padding: 11px 24px;

    &:hover {
      background-color:    ${(props) => COLORS[props.$variant].backgroundHover};
      color:               ${(props) => COLORS[props.$variant].colorHover};
    }

    &:not(.no-scale):hover {
      transform: scale(1.05);
      transform-origin: center center 0;
    }
  }

  &:disabled,
  &:disabled:hover {
    cursor: default;
    background-color: #e6e6e6;
    border-color: #e6e6e6;
    color: #b3b3b3;
  }

  &:active {
    background-color:       ${(props) => COLORS[props.$variant].activeBackground};
    border-color:           ${(props) => COLORS[props.$variant].activeBorder};
    color:                  ${(props) => COLORS[props.$variant].activeColor};
  }
`;

function StyledButton({ title, type, variant, handleSwitch }) {
  if (handleSwitch) {
    return (
    <Button
      type={type}
      $variant={variant}
      onClick={handleSwitch}
    >
      {title}
    </Button>
    );
  } else {
    return (
      <Button
        type={type}
        $variant={variant}
      >
        {title}
      </Button>
    );
  }
}

export default StyledButton;
