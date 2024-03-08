import { styled } from 'styled-components';

const FormGroupRow = styled.div`
  align-items: unset;
  display: flex;
  flex-direction: unset;
  flex-wrap: wrap;
  justify-content: unset;
  width: 100%;

  /* .mb-m */
  margin-bottom: 24px;
`;

const RowElement = styled.div`
  /* margin-bottom: 16px; */
  line-height: 16px;
  position: relative;
  /* // TODO: REVISIT, try auto with nested input */
  width: 100%;

  /* // TODO: Move to global CSS 'body' selector */
  color: #0d0d0d;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  letter-spacing: -0.3px;
  line-height: 20px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
    width: 50%;
    box-sizing: border-box;
  }
`;

const FormGroup = styled.div`
  line-height: 16px;
  position: relative;
  width: auto;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

function StyledFormGroupRow({ children }) {
  return (
    <FormGroupRow>
      {children.map((child, i) => {
        return (
          <RowElement key={i}>
            <FormGroup>
              {child}
            </FormGroup>
          </RowElement>
        );
      })}
    </FormGroupRow>
  );
}

export default StyledFormGroupRow;
