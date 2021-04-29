import { useContext } from 'react';
import { Wrapper } from './TasksList.style';
import { PomodoroContext } from '../../../providers/PomodoroProvider';
import Task from '../../molecules/Task/Task';

const TasksList = () => {
  const {
    tasks: { tasks },
    handleDeleteTask,
    showTaskDetails,
    handleSetActiveTask,
  } = useContext(PomodoroContext);

  return (
    <Wrapper>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            title={task.title}
            isActive={task.isActive}
            showTaskDetails={showTaskDetails}
            id={task.id}
            task={task}
            handledeleteTask={handleDeleteTask}
            handleSetActiveTask={handleSetActiveTask}
          />
        );
      })}
    </Wrapper>
  );
};

export default TasksList;
