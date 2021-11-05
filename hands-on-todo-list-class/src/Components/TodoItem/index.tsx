import React, { Component } from 'react';
import Styled from 'styled-components';

import { TagElem } from 'Components/supports/CompTypes';
import { Button } from 'Components/Button';

//- Sytled Component
const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const Label = Styled.div`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
`;

//- React Component
interface TodoItemProps {
  readonly label: TagElem;
  readonly onDelete?: () => void;
}

export class TodoItem extends Component<TodoItemProps> {
  render() {
    const { label, onDelete } = this.props;
    return (
      <Container>
        <Label>{label}</Label>
        <Button label="Delete" onClick={onDelete} />
      </Container>
    );
  }
}
