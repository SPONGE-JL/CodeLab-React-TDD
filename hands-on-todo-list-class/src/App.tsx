import React, { useState } from 'react';
import Styled from 'styled-components';

import { Button, Input, TodoItem } from 'Components';

//- Sytled Component
const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = Styled.div`
  width: 50%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #F2F2F2;
  box-shadow: 5px 5px 10px rgba(48, 36, 36, 0.2);
`;

const TodoItemListContainer = Styled.div`
  width: 100%;
  min-width: 350px;
  height: 50%;
  min-height: 400px;
  overflow: scroll;
  margin-bottom: 20px;
  border: 1px solid #BDBDBD;
  border-radius: 8px;
  background-color: #FFFFFF;
`;

const InputContainer = Styled.div`
  width: 100%;
  display: flex;
`;

//- React Component
function App() {
  //- States
  const [todo, setTodo] = useState('');
  const [TodoList, setTodoList] = useState<string[]>([]);

  //- Event Functions
  const addTodo = (): void => {
    if (todo) {
      setTodoList([...TodoList, todo]);
      setTodo('');
    }
  };
  const deleteTodo = (index: number): void => {
    let list = [...TodoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  //- Render
  return (
    <Container>
      <Contents>
        <TodoItemListContainer data-testid="todoList">
          {TodoList.map((toDoLabel, index) => (
            <TodoItem key={index} label={toDoLabel} onDelete={() => deleteTodo(index)} />
          ))}
        </TodoItemListContainer>
        <InputContainer>
          <Input placeholder="Insert a new todo" value={todo} onChange={(inputText) => setTodo(inputText)} />
          <Button label="Add" onClick={addTodo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
