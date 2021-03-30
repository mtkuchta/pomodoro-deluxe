import styled from 'styled-components';
import { formatTime } from '../../../assets/helpers/formatTime';

const Wrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTime = styled.div`
  font-size: 8.6em;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.violet};

  span {
    ${({ isRunning }) => (isRunning ? `animation: colon 1s ease-in-out infinite` : null)};
  }

  @keyframes colon {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const CounterDisplay = ({ value, isRunning }) => {
  formatTime(value);
  return (
    <Wrapper>
      <StyledTime isRunning={isRunning}>{formatTime(value)}</StyledTime>
    </Wrapper>
  );
};

export default CounterDisplay;