import styled from 'styled-components';
import Counter from '../../components/molecules/Counter/Counter';
import Settings from '../../components/organisms/Settings/Settings';

const Wrapper = styled.main`
  width: 100%;
  height: 90%;
`;

const PomodoroTimer = () => {
  return (
    <Wrapper>
      <Counter />
      <Settings />
    </Wrapper>
  );
};

export default PomodoroTimer;
