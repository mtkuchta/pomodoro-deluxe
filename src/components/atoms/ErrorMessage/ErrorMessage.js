import styled from 'styled-components';

const StyledText = styled.p`
  color: red;
  font-size: 1.4em;
  width: 100%;
  padding-left: 40px;
`;

const ErrorMessage = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default ErrorMessage;
