import React from 'react';
import Styled from 'styled-components';

//- Sytled Component
interface ButtonContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

const ButtonContainer = Styled.div<ButtonContainerProps>`
  text-align: center;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
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
  readonly label: string;
  readonly onClick?: () => void;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
}

export const Button = ({ label, onClick, backgroundColor = '#304FFE', hoverColor = '#1639FE' }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} backgroundColor={backgroundColor} hoverColor={hoverColor}>
      <Label>{label}</Label>
    </ButtonContainer>
  );
};
