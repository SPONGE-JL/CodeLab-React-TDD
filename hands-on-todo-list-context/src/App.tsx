import React, { useState } from 'react';
import Styled from 'styled-components';

import { TodoList, InputBox } from 'Components';

//- Sytled Component
const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Contents = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0% 25%;
  padding: 20px;
  border-radius: 8px;
  background-color: : #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

//- React Component
function App() {
  //- States
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<string[]>([]);

  //- Event Functions
  const addTodo = (): void => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  };
  const deleteTodo = (index: number): void => {
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
  };

  //- Render
  return (
    <Container>
      <Contents>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
        <InputBox todo={todo} onType={(inputText) => setTodo(inputText)} onAdd={addTodo} />
      </Contents>
    </Container>
  );
}

export default App;
