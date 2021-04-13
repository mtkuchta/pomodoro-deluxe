import { StyledButton } from './Button.style';

const Button = ({ text, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
