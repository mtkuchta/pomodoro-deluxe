import { useContext } from 'react';
import { Wrapper } from './TasksList.style';
import { PomodoroContext } from '../../../providers/PomodoroProvider';
import Task from '../../molecules/Task/Task';

const TasksList = () => {
  const {
    tasks: { tasks },
    handleSetActiveTask,
    handleDeleteTask,
  } = useContext(PomodoroContext);

  return (
    <Wrapper>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            isActive={task.isActive}
            onClick={handleSetActiveTask}
            id={task.id}
            task={task}
            handledeleteTask={handleDeleteTask}
          />
        );
      })}
    </Wrapper>
  );
};

export default TasksList;
