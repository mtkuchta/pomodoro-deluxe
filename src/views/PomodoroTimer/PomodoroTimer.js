import styled from 'styled-components';
import ActiveTask from '../../components/molecules/ActiveTask/ActiveTask';
import Counter from '../../components/molecules/Counter/Counter';
import IntervalInfo from '../../components/molecules/IntervalInfo/IntervalInfo';
import Settings from '../../components/organisms/Settings/Settings';

const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PomodoroTimer = () => {
  return (
    <Wrapper>
      <ActiveTask />
      <IntervalInfo />
      <Counter />
      <Settings />
    </Wrapper>
  );
};

export default PomodoroTimer;
