import { useState } from 'react';
import styled from 'styled-components';
import AddTaskButton from '../../atoms/AddTaskButton/AddTaskButton';
import AddTaskForm from '../../molecules/AddTaskForm/AddTaskForm';

const Wrapper = styled.div`
  width: 100%;
  height: ${({ isOpen }) => (isOpen ? '30%' : '8%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

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
