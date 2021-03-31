import { StyledButton } from './SubmitButton.style';

const SubmitButton = ({ onClick }) => {
  return <StyledButton onClick={onClick}>Save settings</StyledButton>;
};

export default SubmitButton;
