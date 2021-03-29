import styled from 'styled-components';
import Counter from '../../components/molecules/Counter/Counter';

const Wrapper = styled.main`
  width: 100%;
  height: 90%;
`;

const PomodoroTimer = () => {
  return (
    <Wrapper>
      <Counter />
    </Wrapper>
  );
};

export default PomodoroTimer;
