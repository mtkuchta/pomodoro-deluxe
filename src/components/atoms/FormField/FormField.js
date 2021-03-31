import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: center;
  padding: 15px 0;
  justify-content: space-between;

  p {
    font-size: 2.5em;
  }
`;

const StyledLabel = styled.label`
  font-size: 2.4em;
  color: ${({ theme }) => theme.colors.violet};
`;

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 2.5em;
  width: 20%;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.violet};

  &:focus {
    outline-color: ${({ theme }) => theme.colors.red};
  }
`;

const FormField = ({ onChange, value, label, name, id, type = 'number' }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{label}:</StyledLabel>
      <StyledInput name={name} id={id} type={type} onChange={onChange} value={value} required />
    </Wrapper>
  );
};

export default FormField;
