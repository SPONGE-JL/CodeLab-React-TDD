import React, { Component } from 'react';
import Styled from 'styled-components';

import { TagElem, CssProp } from 'Components/supports/CompTypes';

//- Sytled Component
interface ButtonContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

const ButtonContainer = Styled.div<ButtonContainerProps>`
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

//- React Component
interface ButtonProps {
  readonly label: TagElem;
  readonly onClick?: () => void;
  readonly backgroundColor?: CssProp;
  readonly hoverColor?: CssProp;
}

export class Button extends Component<ButtonProps> {
  render() {
    const { label, onClick, backgroundColor = '#304FFE', hoverColor = '#1639FE' } = this.props;

    return (
      <ButtonContainer onClick={onClick} backgroundColor={backgroundColor} hoverColor={hoverColor}>
        <Label>{label}</Label>
      </ButtonContainer>
    );
  }
}
