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

function StyledFormGroupRow({ children }) {

  return (
    <FormGroupRow>
      {children}
    </FormGroupRow>
  );
}

export default StyledFormGroupRow;
