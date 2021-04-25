import { Wrapper, StyledLabel, StyledInput } from './FormField.style';
import PropTypes from 'prop-types';

const FormField = ({ onChange, value, label, name, id, type = 'number' }) => {
  return (
    <Wrapper>
      <StyledLabel htmlFor={id}>{label}:</StyledLabel>
      <StyledInput name={name} id={id} type={type} onChange={onChange} value={value} min="1" required />
    </Wrapper>
  );
};

FormField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  label: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
};

export default FormField;
