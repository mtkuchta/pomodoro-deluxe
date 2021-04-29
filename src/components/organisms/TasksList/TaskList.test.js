import TasksList from './TasksList';
import AddTask from '../AddTask/AddTask';
import { renderWithProviders } from '../../../assets/helpers/renderWithProviders';
import { fireEvent, screen } from '@testing-library/react';

describe('Task List', () => {
  it('Adds task to list and save in local storage', () => {
    renderWithProviders(
      <>
        <AddTask />
        <TasksList />
      </>
    );
    fireEvent.click(screen.getByText('Add task...'));
    fireEvent.change(screen.getByPlaceholderText('New task...'), { target: { value: 'learn TS' } });
    fireEvent.click(screen.getByText('Save'));
    screen.getByText('learn TS');
    expect(JSON.parse(window.localStorage.getItem('tasks'))[0].title).toEqual('learn TS');
  });

  it('Modifies task title and description', () => {
    renderWithProviders(
      <>
        <AddTask />
        <TasksList />
      </>
    );
    fireEvent.click(screen.getByText('learn TS'));
    const titleInput = screen.getByLabelText('Task title');
    const descriptionInput = screen.getByLabelText('Description');
    fireEvent.change(titleInput, { target: { value: 'learn Vue' } });
    fireEvent.change(descriptionInput, { target: { value: 'asap' } });
    fireEvent.click(screen.getByText('Save'));
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    expect(tasks[0].title).toEqual('learn Vue');
    expect(tasks[0].description).toEqual('asap');
  });

  it('Deletes task', () => {
    renderWithProviders(<TasksList />);
    fireEvent.click(screen.getByText('learn Vue'));
    fireEvent.click(screen.getByText('Delete'));
    const tasks = JSON.parse(window.localStorage.getItem('tasks'));
    expect(tasks.length).toEqual(0);
  });
});
