import { StyledText } from './ErrorMessage.style';
import PropTypes from 'prop-types';

const ErrorMessage = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
