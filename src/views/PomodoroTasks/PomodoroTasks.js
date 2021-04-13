import styled from 'styled-components';
import AddTask from '../../components/organisms/AddTask/AddTask';
import TasksList from '../../components/organisms/TasksList/TasksList';

const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PomodoroTasks = () => {
  return (
    <Wrapper>
      <AddTask />
      <TasksList />
    </Wrapper>
  );
};

export default PomodoroTasks;
