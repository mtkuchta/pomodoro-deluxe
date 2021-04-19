import { StyledButton } from './FormButton.style';
import PropTypes from 'prop-types';

const FormButton = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

FormButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default FormButton;
