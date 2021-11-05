import React, { Component } from 'react';
import Styled from 'styled-components';
import type { IScriptSnapshot } from 'typescript';

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
  readonly error: boolean;
  readonly todo: string;
  readonly todoList: string[];
}

export class App extends Component<AppProps, AppState> {
  //- Initiation States
  // https://ko.reactjs.org/docs/react-component.html#constructor
  constructor(props: AppProps) {
    super(props);

    this.state = {
      error: false,
      todo: '',
      todoList: [],
    };
  }

  //- Render
  render() {
    const { todo, todoList, error } = this.state;
    return (
      <Container>
        {!error && (
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
        )}
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

  //- Life-cycle Functions
  //? When craete the component:
  //> contructor -> getDerivedFromProps -> render -> componentDidMount
  //? When modify the props of component:
  //> getDerivedFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
  //? When modify the state of componet:
  //> shduldcomponentUpdate -> render -> getSnapshotBeforUpdate -> componentDidUpdate
  //? When occured error in rendering:
  //> componentDidCatch
  //? When removed the component:
  //> componentWithUnmount

  // https://ko.reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    console.log('exec > componentDidMount');
  }

  // https://ko.reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
  getSnapshotBeforeUpdate(PrevProps: AppProps, prevState: AppState) {
    console.log('exec > getSnapshotBeforeUpdate');
    return { testData: true }; // serve to componentDidUpdate as snapshot.
  }

  // https://ko.reactjs.org/docs/react-component.html#componentdidupdate
  componentDidUpdate(prevProps: AppProps, prevState: AppState, snapshot: IScriptSnapshot) {
    console.log('exec > componentDidUpdate');
  }

  // https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate
  shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
    console.log('exec > shouldComponentUpdate');
    return true; // true: re-render / false: block to re-render
    // return nextProps.id !== this.props.id;
  }

  // https://ko.reactjs.org/docs/react-component.html#unmounting
  componentWillUnmount() {
    console.log('exec > componentWillUnmount');
  }

  // https://ko.reactjs.org/docs/react-component.html#error-handling
  // Check > https://ko.reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  static getDerivedFromProps(nextProps: AppProps, prevState: AppState) {
    console.log('exec > getDerivedFromProps');
    return null;
    // return (nextProps.id !== prevState.id) ? { value: nextProps.value } : null
  }

  // https://ko.reactjs.org/docs/react-component.html#error-handling
  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ error: true });
  }
}

export default App;
