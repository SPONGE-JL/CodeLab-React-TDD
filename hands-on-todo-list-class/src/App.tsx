import React, { Component } from 'react';
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
interface AppProps {}

interface AppState {
  readonly todo: string;
  readonly todoList: string[];
}

export class App extends Component<AppProps, AppState> {
  //- Initiation States
  constructor(props: AppProps) {
    super(props);

    this.state = {
      todo: '',
      todoList: [],
    };
  }

  //- Render
  render() {
    const { todo, todoList } = this.state;
    return (
      <Container>
        <Contents>
          <TodoItemListContainer data-testid="todoList">
            {todoList.map((toDoLabel, index) => (
              <TodoItem key={index} label={toDoLabel} onDelete={() => this.deleteTodo(index)} />
            ))}
          </TodoItemListContainer>
          <InputContainer>
            <Input placeholder="Insert a new todo" value={todo} onChange={(inputText) => this.setState({ todo: inputText })} />
            <Button label="Add" onClick={this.addTodo} />
          </InputContainer>
        </Contents>
      </Container>
    );
  }

  //- Event Functions
  private addTodo = (): void => {
    const { todo, todoList } = this.state;

    if (todo) {
      this.setState({
        todo: '',
        todoList: [...todoList, todo],
      });
    }
  };

  private deleteTodo = (index: number): void => {
    const { todoList } = this.state;
    let list = [...todoList];
    list.splice(index, 1);
    this.setState({ todoList: list });
  };
}

export default App;
