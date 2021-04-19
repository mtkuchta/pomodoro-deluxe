import { useState } from 'react';
import { Wrapper } from './AddTask.style';
import AddTaskButton from '../../atoms/AddTaskButton/AddTaskButton';
import AddTaskForm from '../../molecules/AddTaskForm/AddTaskForm';

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Wrapper isOpen={isOpen}>
      {isOpen ? <AddTaskForm handleOpen={handleOpen} /> : ''}
      {isOpen ? '' : <AddTaskButton onClick={handleOpen} isOpen={isOpen} />}
    </Wrapper>
  );
};

export default AddTask;
