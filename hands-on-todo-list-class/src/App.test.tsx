import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import App from './App';

/*
 ! [Test suite with cases]
 */
describe('<App />', () => {
  it('correctly renders components with empty todoList.', () => {
    const { container } = render(<App />);

    // Child Components & Elements
    mustRenderTodoList();
    mustRenderInput();
    mustRenderAddButton();

    expect(container).toMatchSnapshot();
  });

  it('cannot add an empty todo.', () => {
    render(<App />);

    const todoList = getAddButtonComponent();
    const addButton = getAddButtonComponent();

    const initialTodoCount = todoList.childElementCount;
    expect(initialTodoCount).toBe(0);

    fireEvent.click(addButton);
    expect(todoList.childElementCount).toBe(initialTodoCount);
  });

  it('adds and deletes todo items.', () => {
    render(<App />);

    const todoList = getTodoListComponent();
    const input = getInputElement();
    const addButton = getAddButtonComponent();

    // Check add
    mustRenderNewTodoAfterClickAddButton({ input, addButton, todoText: 'the 1st todo' });
    expect(todoList.childElementCount).toBe(1);
    mustRenderNewTodoAfterClickAddButton({ input, addButton, todoText: 'the 2nd todo' });
    expect(todoList.childElementCount).toBe(2);
    mustRenderNewTodoAfterClickAddButton({ input, addButton, todoText: 'the 3rd todo' });
    expect(todoList.childElementCount).toBe(3);

    // Check delete
    mustRenderAfterClickDeleteButton({ todoList, todoIndexAsTargetForRemoving: 1, desiredTodoTexts: ['the 1st todo', 'the 3rd todo'] });
    mustRenderAfterClickDeleteButton({ todoList, todoIndexAsTargetForRemoving: 0, desiredTodoTexts: ['the 3rd todo'] });
    mustRenderAfterClickDeleteButton({ todoList, todoIndexAsTargetForRemoving: 0, desiredTodoTexts: [] });
  });
});

/*
 ! [Test function parts (using hoisting)]
 */
//- TodoList
const mustRenderTodoList = (expectedTodoCount: number = 0): void => {
  const todoList = getTodoListComponent();
  expect(todoList).toBeInTheDocument();
  expect(todoList.childElementCount).toBe(expectedTodoCount);
  if (expectedTodoCount === 0) {
    expect(todoList.firstChild).toBeNull();
  }
};
const getTodoListComponent = (): HTMLElement => screen.getByTestId('todoList');

//- Input
const mustRenderInput = (): void => {
  const input = getInputElement();
  expect(input).toBeInTheDocument();
  expect(input.placeholder).toBe('Insert a new todo');
  expect(input.value).toBe('');
};
const getInputElement = (): HTMLInputElement => screen.getByPlaceholderText('Insert a new todo') as HTMLInputElement;

//- AddButton
const mustRenderAddButton = (): void => {
  const addButton = getAddButtonComponent();
  expect(addButton).toBeInTheDocument();
};
const getAddButtonComponent = (): HTMLElement => screen.getByText('Add');

//- AddButton (Click)
type AfterClickAddButton = {
  input: HTMLInputElement;
  addButton: HTMLElement;
  todoText: string;
};
const mustRenderNewTodoAfterClickAddButton = ({ input, addButton, todoText = 'a single todo text' }: AfterClickAddButton): void => {
  // Set a todoText at Input Element
  fireEvent.change(input, { target: { value: todoText } });
  expect(input.value).toBe(todoText);

  // Click the AddButton, then value of the Input Element will be clear
  fireEvent.click(addButton);
  expect(input.value).toBe('');

  // New added TodoItem Component
  const addedTodoItem = screen.getByText(todoText);
  expect(addedTodoItem).toBeInTheDocument();
};

//- DeleteButton (Click)
type ClickDeleteButtonProps = {
  todoList: HTMLElement;
  todoIndexAsTargetForRemoving: number;
  desiredTodoTexts: string[];
};
const mustRenderAfterClickDeleteButton = ({ todoList, todoIndexAsTargetForRemoving, desiredTodoTexts }: ClickDeleteButtonProps): void => {
  // Nothing to delete
  if (!desiredTodoTexts) {
    expect(todoList.childElementCount).toBe(todoIndexAsTargetForRemoving);
    expect(todoList.firstChild).toBeNull();
    return;
  }

  // Click the DeleteButton
  const deleteButton = getDeleteButton(todoIndexAsTargetForRemoving);
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);

  // Something has been deteled
  expect(todoList.childElementCount).toBe(desiredTodoTexts.length);
  for (const desiredTodoText of desiredTodoTexts) {
    expect(screen.getByText(desiredTodoText)).toBeInTheDocument();
  }
};
const getDeleteButton = (index: number = 0): HTMLElement => screen.getAllByText('Delete')[index];
