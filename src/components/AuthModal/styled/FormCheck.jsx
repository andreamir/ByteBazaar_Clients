import { styled } from 'styled-components';

// .form-check
const FormCheck = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: unset;
  flex-wrap: unset;
  justify-content: unset;
`;

// .cx-checkbox-button
const CheckboxButton = styled.label`
  align-items: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: unset;
  flex-wrap: unset;
  justify-content: unset;
  /* margin-bottom: 15px; */
  user-select: none;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 0;
`;

const CheckMark = styled.span`
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex: 0 0 20px;
  flex-direction: unset;
  flex-wrap: unset;
  height: 20px;
  justify-content: center;
`;

function StyledFormCheck({ children }) {
  return (
    <FormCheck>
      <CheckboxButton>
        <input
          style={{ boxSizing: 'border-box', padding: 0 }}
          type="checkbox"
          name={'TODO SOON: GET FROM PROPS'}
        />
        {/* <CheckMark /> */}
        <p style={{ marginLeft: '8px' }}>
          {children}
        </p>
      </CheckboxButton>
    </FormCheck>
  );
}

export default StyledFormCheck;
