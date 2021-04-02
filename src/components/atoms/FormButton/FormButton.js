import { StyledButton } from './FormButton.style';

const FormButton = ({ onClick, text }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default FormButton;
