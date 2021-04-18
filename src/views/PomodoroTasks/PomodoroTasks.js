import styled from 'styled-components';
import AddTask from '../../components/organisms/AddTask/AddTask';
import TasksList from '../../components/organisms/TasksList/TasksList';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Wrapper = styled.main`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerLink = styled(Link)`
  font-size: 2.2em;
  color: ${({ theme }) => theme.colors.red};
  letter-spacing: 1px;
  text-decoration: none;
`;

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
