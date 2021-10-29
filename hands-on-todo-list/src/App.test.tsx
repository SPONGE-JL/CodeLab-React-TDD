import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import App from './App';

enum Presets {
  Add = 'Add',
  Delete = 'Delete',
}

describe('<App />', () => {
  it('correctly renders components with empty todoList.', () => {
    const { container } = render(<App />);

    const todoList = screen.getByTestId('todoList');
    expect(todoList).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(0);
    expect(todoList.firstChild).toBeNull();

    const input = screen.getByPlaceholderText('Insert a new todo') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Insert a new todo');
    expect(input.value).toBe('');

    const addButton = screen.getByText(Presets.Add);
    expect(addButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('adds and deletes todo items.', () => {
    render(<App />);

    // Default
    const todoList = screen.getByTestId('todoList');
    expect(todoList.childElementCount).toBe(0);

    // Insert first value
    const input = screen.getByPlaceholderText('Insert a new todo') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'the first todo' } });
    expect(input.value).toBe('the first todo');
    const addButton = screen.getByText(Presets.Add);
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    // Add the first todo
    const firstAddedTodoItem = screen.getByText('the first todo');
    expect(firstAddedTodoItem).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(1);

    // Insert second value
    fireEvent.change(input, { target: { value: 'the second todo' } });
    expect(input.value).toBe('the second todo');
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    // Add the second todo
    const secondAddedTodoItem = screen.getByText('the second todo');
    expect(secondAddedTodoItem).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(2);

    // Insert third value
    fireEvent.change(input, { target: { value: 'the third todo' } });
    expect(input.value).toBe('the third todo');
    fireEvent.click(addButton);
    expect(input.value).toBe('');
    // Add the third todo
    const thirdAddedTodoItem = screen.getByText('the third todo');
    expect(thirdAddedTodoItem).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(3);

    // Delete the second todo
    const secondDeleteButton = screen.getAllByText(Presets.Delete)[1];
    fireEvent.click(secondDeleteButton);
    // Removed the second value
    expect(screen.getByText('the first todo')).toBeInTheDocument();
    expect(screen.getByText('the third todo')).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(2);

    // Delete the first todo
    const firstDeleteButton = screen.getAllByText(Presets.Delete)[0];
    fireEvent.click(firstDeleteButton);
    // Removed the first value
    expect(screen.getByText('the third todo')).toBeInTheDocument();
    expect(todoList.childElementCount).toBe(1);

    // Delete the third todo
    const thirdDeleteButton = screen.getAllByText(Presets.Delete)[0];
    fireEvent.click(thirdDeleteButton);
    // Removed the first value
    expect(todoList.childElementCount).toBe(0);
    expect(todoList.firstChild).toBeNull();
  });

  it('cannot add an empty todo.', () => {
    render(<App />);

    const todoList = screen.getByTestId('todoList');
    const button = screen.getByText(Presets.Add);

    const prevTodoCount = todoList.childElementCount;
    expect(prevTodoCount).toBe(0);
    fireEvent.click(button);
    expect(todoList.childElementCount).toBe(prevTodoCount);
  });
});
