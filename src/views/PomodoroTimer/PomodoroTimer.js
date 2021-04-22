import { Wrapper } from './PomodoroTimer.style';
import ActiveTask from '../../components/molecules/ActiveTask/ActiveTask';
import Counter from '../../components/molecules/Counter/Counter';
import IntervalInfo from '../../components/molecules/IntervalInfo/IntervalInfo';
import Settings from '../../components/organisms/Settings/Settings';

import BackgroundBlured from '../../components/atoms/BackgroundBlured/BackgroundBlured';

const PomodoroTimer = () => {
  return (
    <Wrapper>
      <ActiveTask />
      <IntervalInfo />
      <Counter />
      <BackgroundBlured />
      <Settings />
    </Wrapper>
  );
};

export default PomodoroTimer;
