import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import App from './App';

describe('<App />', () => {
  it('correctly renders components with empty todoList.', () => {
    const { container } = render(<App />);

    const todoList = screen.getByTestId('todoList');
    expect(todoList).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(0);
    expect(todoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('Insert a new task') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Insert a new task');
    expect(input.value).toBe('');

    const addButton = screen.getByText('Add');
    expect(addButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('adds and deletes todo items.', () => {
    const { container } = render(<App />);

    // Default
    const todoList = screen.getByTestId('todoList');
    expect(todoList.childElementCount).toBe(0);

    // Insert first value
    const input = screen.getByPlaceholderText('Insert a new task') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'the first task' } });
    expect(input.value).toBe('the first task');
    const addButton = screen.getByText('Add');
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    // Add the first task
    const firstAddedTodoItem = screen.getByText('the first task');
    expect(firstAddedTodoItem).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(1);

    // Insert second value
    fireEvent.change(input, { target: { value: 'the second task' } });
    expect(input.value).toBe('the second task');
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    // Add the second task
    const secondAddedTodoItem = screen.getByText('the second task');
    expect(secondAddedTodoItem).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(2);

    // Insert third value
    fireEvent.change(input, { target: { value: 'the third task' } });
    expect(input.value).toBe('the third task');
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    // Add the third task
    const thirdAddedTodoItem = screen.getByText('the third task');
    expect(thirdAddedTodoItem).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(3);

    // Delete the second task
    const secondDeleteButton = screen.getAllByText('delete')[1];
    fireEvent.click(secondDeleteButton);
    // Removed the second value
    expect(screen.getByText('the first task')).toBeInTheDocument();
    expect(screen.getByText('the third task')).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(2);

    // Delete the first task
    const firstDeleteButton = screen.getAllByText('delete')[0];
    fireEvent.click(firstDeleteButton);
    // Removed the first value
    expect(screen.getByText('the third task')).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(1);

    // Delete the third task
    const thirdDeleteButton = screen.getAllByText('delete')[0];
    fireEvent.click(thirdDeleteButton);
    // Removed the first value
    expect(todoList.childElementCount).toBe(0);
    expect(todoList.firstChild).toBeNull();
  });
});
