import { styled } from 'styled-components';

const ButtonContent = styled.span`
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  flex-direction: unset;
  flex-wrap: unset;
  justify-content: center;
  line-height: normal;
  position: relative;
  transition: opacity inherit inherit inherit;
`;

function StyledButtonContent({children}) {

  return (
    <ButtonContent>
      {children}
    </ButtonContent>
  );
}

export default StyledButtonContent;
