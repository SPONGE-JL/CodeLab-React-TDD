import React from 'react';
import Styled from 'styled-components';

import { TodoItem } from 'Components';

//- Sytled Component
const Container = Styled.div`
  width: 100%;
  min-width: 350px;
  min-height: 400px;
  overflow: scroll;
  border: 1px solid #BDBDBD;
  border-radius: 8px;
  margin-bottom: 20px;
`;

//- React Component
interface Props {
  readonly todoList: string[];
  readonly deleteTodo: (index: number) => void;
}

export const TodoList = ({ todoList, deleteTodo }: Props) => {
  return (
    <Container data-testid="todoList">
      {todoList.map((toDoLabel, index) => (
        <TodoItem key={index} label={toDoLabel} onDelete={() => deleteTodo(index)} />
      ))}
    </Container>
  );
};
