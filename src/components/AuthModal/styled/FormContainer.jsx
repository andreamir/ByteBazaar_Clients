import { styled } from 'styled-components';

const FormContainer = styled.div.attrs((props) => ({
  "role": 'dialog',
  "aria-modal": 'true',
  "title": props.title || 'Form Content',
}))`
  /* position relative is needed to work within <Modal /> component */
  position: relative;
  background-color: #fff;
  min-height: 100%;
  padding: 24px;
  width: 100%;

  /* .inherited-styles-for-exported-element  */
  color: #0d0d0d;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  letter-spacing: -.3px;
  line-height: 20px;
  visibility: visible;

  @media (min-width: 768px) {
    border-radius: 24px;
    height: auto;
    margin: 24px auto;
    min-width: 400px;
    max-width: 612px;
    min-height: auto;
    padding: 32px;

    /* .inherited-styles-for-exported-element  */
    visibility: visible;
  }
`;

function StyledFormContainer({ children, title }) {
  return (
    <FormContainer title={title}>
      {children}
    </FormContainer>
  )
}

export default StyledFormContainer;
