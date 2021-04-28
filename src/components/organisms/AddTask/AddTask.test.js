import AddTask from './AddTask';
import TasksList from '../../organisms/TasksList/TasksList';
import { renderWithProviders } from '../../../assets/helpers/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';

describe('AddTask', () => {
  const setup = () => {
    const testedComponent = renderWithProviders(<AddTask />);
    const addTaskBtn = screen.getByText('Add task...');

    return {
      testedComponent,
      addTaskBtn,
    };
  };

  it('saves tasks in local storage', () => {
    const { addTaskBtn } = setup();
    fireEvent.click(addTaskBtn);
    const input = screen.getByPlaceholderText('New task...');
    const saveBtn = screen.getByText('Save');
    fireEvent.change(input, { target: { value: 'read a book' } });
    fireEvent.click(saveBtn);
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    expect(tasks[0].title).toEqual('read a book');
  });

  it('adds task to tasks list', () => {
    renderWithProviders(
      <>
        <AddTask />
        <TasksList />
      </>
    );
    const addTaskBtn = screen.getByText('Add task...');
    fireEvent.click(addTaskBtn);
    fireEvent.change(screen.getByPlaceholderText('New task...'), { target: { value: 'learn JS' } });
    fireEvent.click(screen.getByText('Save'));
    screen.getByText('learn JS');
  });
});
