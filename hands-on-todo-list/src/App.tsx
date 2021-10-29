import React, { useState } from 'react';
import Styled from 'styled-components';

import { Button, Input, ToDoItem } from 'Components';

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
  padding: 20px;
  border-radius: 8px;
  background-color: : #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ToDoItemListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow: scroll;
  border: 1px solid #BDBDBD;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const InputContainer = Styled.div`
  display: flex;
`;

//- React Component
function App() {
  //- States
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  //- Event Functions
  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  };
  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };

  //- Render
  return (
    <Container>
      <Contents>
        <ToDoItemListContainer>
          {toDoList.map((toDoLabel, index) => (
            <ToDoItem key={index} label={toDoLabel} onDelete={() => deleteToDo(index)} />
          ))}
        </ToDoItemListContainer>
        <InputContainer>
          <Input placeholder="Insert a new task" value={toDo} onChange={(inputText) => setToDo(inputText)} />
          <Button label="Add" onClick={addToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;
