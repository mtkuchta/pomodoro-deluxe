import React, { useContext } from 'react';
import { Wrapper, StyledText } from './ActiveTask.style';
import TaskLink from '../../atoms/TasksLink/TasksLink';
import { PomodoroContext } from '../../../providers/PomodoroProvider';

const ActiveTask = () => {
  const {
    tasks: { tasks },
    history,
  } = useContext(PomodoroContext);

  const activeTask = tasks.find((task) => task.isActive === true);

  return (
    <Wrapper>
      {activeTask ? (
        <StyledText
          onClick={() => {
            history.push('/tasks');
          }}
        >
          {activeTask.title}
        </StyledText>
      ) : (
        <TaskLink />
      )}
    </Wrapper>
  );
};

export default ActiveTask;
