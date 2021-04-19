import { Wrapper, TimerLink } from './PomodoroTasks.style';
import AddTask from '../../components/organisms/AddTask/AddTask';
import TasksList from '../../components/organisms/TasksList/TasksList';

const PomodoroTasks = () => {
  return (
    <Wrapper>
      <AddTask />
      <TasksList />
      <TimerLink to="/">Return to timer</TimerLink>
    </Wrapper>
  );
};

export default PomodoroTasks;
