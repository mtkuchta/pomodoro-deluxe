import styled from 'styled-components';
import ActiveTask from '../../components/molecules/ActiveTask/ActiveTask';
import Counter from '../../components/molecules/Counter/Counter';
import Settings from '../../components/organisms/Settings/Settings';

const Wrapper = styled.main`
  width: 100%;
  height: 90%;
`;

const PomodoroTimer = () => {
  return (
    <Wrapper>
      <ActiveTask />
      <Counter />
      <Settings />
    </Wrapper>
  );
};

export default PomodoroTimer;
